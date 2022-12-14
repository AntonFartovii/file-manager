import { resolve } from 'path'
import { createWriteStream } from 'fs'
import {parseArgs} from "../utils.js";
import {app} from "../app.js";
import {access} from 'fs/promises'

export const add = async ( args ) => {

    let [from, arg] = parseArgs( args )
    if ( from === '' ) return app.printMessage('inval')

    const filePath = resolve( from )

    const writeStream = createWriteStream( filePath )
    writeStream.write('')
    writeStream.end('')
}

// add new_file_name
// Task: Create empty file in current working directory:

// test commands:
// add fartovii.txt
// add C:\Users\fartovii.txt'
// add 'C:/Users/fartovii.txt'

// Invalid input - неверная команда (отсутствует путь)
// Operation filed - не существует например папку указанная в пути

