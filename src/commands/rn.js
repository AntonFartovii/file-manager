import { rename } from 'fs/promises'
import { access } from 'fs/promises'
import { cwd } from 'node:process'
import { resolve } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import {getFileName, parseArgs} from "../utils.js";
import {rm} from "./rm.js";
import {isFile} from "../utils.js";

// rn path_to_file new_filename

export const rn = async  ( args ) => {
    let [from, to] = parseArgs( args )

    // v.1
    // await access ( resolve(from) )
    await isFile( resolve(from) )
    await rename( resolve(from), resolve(to) )

    // v.2
    // const readStream  = createReadStream( resolve(from) )
    // const writeStream = createWriteStream( resolve(to) )
    //
    // writeStream.write('')
    //
    // readStream.on('data', chunk => {
    //     writeStream.write(chunk)
    // });
    //
    // readStream.on('end', async () => {
    //     writeStream.end()
    //         await rm( args )
    // })
}

// rn path_to_file new_filename
// Rename file (content should remain unchanged):

