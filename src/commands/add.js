import { resolve } from 'path'
import { createWriteStream, constants} from 'fs'
import {app} from "../app.js";
import {access} from 'fs/promises'

export const add = async ( args ) => {

    let [from, ...empty] = args
    if ( from.length === 0 || empty.length ) return app.printMessage('inval')

    const filePath = resolve( from )
    try {
        await access( filePath, constants.F_OK);
        return app.printMessage('fail')
    } catch {
        const writeStream = createWriteStream( filePath )
        writeStream.on('error', () => {
            app.printMessage('fail')
        })
        writeStream.write('')
        writeStream.end('')
    }


}

// add new_file_name
// Task: Create empty file in current working directory:

// test commands:
// add fartovii.txt
// add C:\Users\fartovii.txt'
// add 'C:/Users/fartovii.txt'

// Invalid input - неверная команда (отсутствует путь) или лишние аргументы
// Operation filed - не существует например папку указанная в пути или существует уже файл (защита от перезаписи)

