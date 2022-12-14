import process from 'node:process'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import { access } from 'fs/promises'
import {app} from '../app.js'

export const cat = async ( fileName ) => {

    const filePath = resolve( fileName )

    await access ( filePath )
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
        app.printMessage('fail')
    })

    // stream.on('finish', () => {
    //     app.printMessage('curDir')
    // })

}

// cat path_to_file
// cat 'path_to_file'

// Read file and print it's content in console (should be done using Readable stream)
// Operation filed - неверная команда (отсутствует путь)
// Invalid input - не существует файл или некорректный путь
