
import { cwd } from 'node:process'
import { resolve } from 'path'
import { access } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import {isFolder} from "../utils.js";
import {getFileName} from "../utils.js";
import {rm} from "./rm.js";
import {parseArgs} from "../utils.js";

export const cp = async ( args, deleteFrom= false ) => {
    let [from, to] = parseArgs( args )
    const filename = getFileName( from )

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
}

// cp path_to_file path_to_new_directory
