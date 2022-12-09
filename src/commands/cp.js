
import { cwd } from 'node:process'
import { join, resolve } from 'path'
import { access } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import {parseArgs} from "../utils.js";
import {isFolder} from "../utils.js";
import {getFileName} from "../utils.js";
import {rm} from "./rm.js";

export const cp = async ( args, deleteFrom= false ) => {
    let [from, to] = parseArgs( args )

    console.log( 'from: ', from )
    console.log( 'to: ', to )
    console.log( 'resolve from: ', resolve( from ) )
    console.log( 'resolve to: ', resolve( cwd(), to ) )
    const filename = getFileName( from )
    console.log( 'resolve to file: ', resolve( to, filename ) )

    try {
        await access ( resolve(from) )
        await isFolder( resolve(to) )
        const readStream  = createReadStream( resolve(from) )
        const writeStream = createWriteStream( resolve(to, filename) )

        writeStream.write('')

        readStream.on('data', chunk => {
            writeStream.write(chunk)
        });

        readStream.on('end', async () => {
            writeStream.end()
            if ( deleteFrom ) {
                await rm( args )
            }
        })

    } catch {
        // messenger('fail')
    }
}

// cp path_to_file path_to_new_directory
