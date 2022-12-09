// import {createInterface} from 'node:readline'
import process, {cwd, chdir} from 'node:process'
import {readdir} from 'fs/promises'

import {getUsername} from "./utils.js";
import {getHomedir} from "./utils.js";
import {cd} from "./commands/cd.js";
import {setStartingDir} from "./utils.js";

class FileManager{
    constructor() {
        this.function = {}
        this.homeDir = getHomedir() || ''
        this.userName = getUsername() || ''
        this.prepare()
        this.init()
    }

    prepare() {
        setStartingDir()
        this.createMessanges()
    }

    init() {

        this.printMessage('welcome')
        this.printMessage('curDir')

    }

    printMessage( name ) {
        const mes = this.messanges[ name ]
        process.stdout.write( mes+'\n' )
    }

    createMessanges() {
        this.messanges  = {
            'welcome': `Welcome to the File Manager, ${this.userName}!\n`,
            'curDir':  `You are currently in ${cwd()}`,
            'bye':     `Thank you for using File Manager, ${this.userName}!\n`,
            'inval':   `Invalid input\n`,
            'fail':    `Operation failed\n`,
            'test':     `Testing...`
        }
    }

    async execCommand( name, args) {
        this.comandArgs = args
        try {
            console.log(`Выполняю команду-${name}-`)
            console.log(`Выполняю аргумент-${args}-`)
            await this.function[name](args)
            this.printMessage('curDir')
            console.log( cwd() )

        } catch {
            await this.printMessage('inval')
            await this.printMessage('curDir')
        }
    }

    on( command, fn ) {
        this.function[command] = fn
    }
}
export const app = new FileManager()


