import process from 'node:process'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import {app} from '../app.js'
import {access} from 'fs/promises'

export const cat = async ( args ) => {
    let [from, ...empty] = args
    if ( from.length === 0 || empty.length ) return app.printMessage('inval')

    const filePath = resolve( from )
    try {
        await access(filePath)
    } catch {
        return app.printMessage('fail')
    }

    const stream = createReadStream( filePath )

    let body = ''
    stream.on('data',  chunk => {
        body += chunk
    })

    stream.on('end', () => {
        process.stdout.write ( `File's content:\n` )
        process.stdout.write ( body + '\n' )
        app.printMessage('curDir')
    })

    stream.on('error', () => {
        return app.printMessage('fail')
    })

    stream.on('finish', () => {
        app.printMessage('curDir')
    })

}

// cat path_to_file
// cat 'path_to_file'

// Read file and print it's content in console (should be done using Readable stream)
// Invalid input - неверная команда (отсутствует путь) или лишние аргументы
// Operation filed - не существует файл или путь
