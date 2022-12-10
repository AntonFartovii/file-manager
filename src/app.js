// import {createInterface} from 'node:readline'
import process, {cwd, chdir} from 'node:process'
import {readdir} from 'fs/promises'

import {getUsername} from "./utils.js";
import {getHomedir} from "./utils.js";
import {setStartingDir} from "./utils.js";

class FileManager{
    constructor() {
        this.function = {}
        this.mess = {}
        this.homeDir = getHomedir() || ''
        this.userName = getUsername() || ''
        this.prepare()
        this.init()
    }

    init() {
        this.printMessage('welcome')
        this.printMessage('curDir')
    }

    printMessage( name ) {
        this.mess[ name ]()
    }

    async execCommand( name, args) {
        await this.function[name](args)
    }

    on( command, fn ) {
        this.function[command] = fn
    }

    prepare() {
        setStartingDir()
        this.mess = {
            'curDir':  () => {
               this.print(`You are currently in ${cwd()}`)
            },
            'welcome': () => {
                this.print(`Welcome to the File Manager, ${this.userName}!`)
            },
            'bye':     () => {
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


