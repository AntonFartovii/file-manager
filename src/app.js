import process, {cwd, chdir} from 'node:process'
import {capitalize} from "./utils.js";

class FileManager {
    constructor() {
        this.function = {}
        this.mess = {}
        this.homeDir = ''
        this.userName = ''
        this.prepare()
        this.init()
    }

    init() {
        this.printMessage('welcome')
        this.printMessage('curDir')
    }

    getHomedir() {
        return process.env.HOME || process.env.USERPROFILE;
    }

    setUsername() {
        const argv = process.argv.slice(2).toString().trim()
        this.userName = !argv.startsWith('--')
            ? 'Unknown'
            : capitalize( argv.split('=')[1] )
    }

    setStartingDir() {
        this.homeDir = this.getHomedir()
        try {
            chdir ( this.homeDir )
        } catch (err) {
            process.stdout.write (`chdir: ${err}`)
        }
    }

    printMessage( name ) {
        this.mess[name]()
    }

    async execCommand( name, args) {
        await this.function[name](args)
    }

    on( command, fn ) {
        try {
            this.function[command] = fn
        } catch {
            this.printMessage('fail')
        }
    }

    prepare() {
        this.setStartingDir()
        this.setUsername()
        this.mess = {
            'curDir':  () => {
               this.print(`You are currently in ${cwd()}`)
            },
            'welcome': () => {
                this.userName = this.userName || 'Unknown user'
                this.print(`Welcome to the File Manager, ${this.userName}!`)
            },
            'bye':     () => {
                this.userName = this.userName || 'Unknown user'
                this.print(`Thank you for using File Manager, ${this.userName}!`)},
            'inval':   () => {
                this.print(`Invalid input`)
            },
            'fail':    () => {
                this.print(`Operation failed`)
            },
            'test':     () => {
                this.print(`Testing...`)
            }
        }
    }

    print( mes ) {
        process.stdout.write( mes+'\n' )
    }
}

export const app = new FileManager()
