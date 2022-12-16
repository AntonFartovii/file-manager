import { resolve } from 'path'
import { access, constants } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import { isFolder } from "../utils.js";
import { getFileName } from "../utils.js";
import { rm } from "./rm.js";
import { app } from "../app.js";

export const cp = async ( args, deleteFrom= false ) => {
    let [from, to] = args
    const filename = getFileName( from )

    if ( from === '' || to === '' ) return app.printMessage('inval')
    try {
        await access( resolve(from) )
        await isFolder( resolve(to) )
    } catch {
        return app.printMessage('fail')
    }

    const readStream  = createReadStream( resolve(from) )
    const writeStream = createWriteStream( resolve(to, filename) )

    writeStream.write('')

    writeStream.on('error', () => {
        app.printMessage('fail')
    })

    readStream.on('data', chunk => {
        writeStream.write(chunk)
    });

    readStream.on('error', () => {
        app.printMessage('fail')
    })

    readStream.on('end', async () => {
        writeStream.end()
        if ( deleteFrom ) {
            await rm( args )
        }
    })
}

// cp path_to_file path_to_new_directory
// cp anyfile.txt path_to_new_directory

// Operation failed - если не указан путь или не существует файл

