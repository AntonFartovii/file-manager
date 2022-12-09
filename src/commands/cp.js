
import { cwd } from 'node:process'
import { join } from 'path'
import { access } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import {parseArgs} from "../utils.js";
import {isFolder} from "../utils.js";

export const cp = async ( args ) => {
    let [from, to] = parseArgs( args )

    console.log( 'from: ', from )
    console.log( 'to: ', to )
    // cp path_to_file path_to_new_directory

    console.log(join ( cwd(), from))
    try {
        // await access ( join ( cwd(), from) )
        // await isFolder( to )
        const readStream  = createReadStream( from )
        const writeStream = createWriteStream( to )

        writeStream.write('')

        readStream.on('data', chunk => {
            writeStream.write(chunk)
        });

        readStream.on('end', () => {
            writeStream.end()
        })

    } catch {
        // messenger('fail')
    }
}
