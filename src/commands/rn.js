import { rename } from 'fs/promises'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import {parseArgs} from "../utils.js";
import {app} from "../app.js";

export const rn = async  ( args ) => {
    let [from, to] = args

    if ( !to.length ) return app.printMessage('inval')
    // v.1
    try {
        await access ( resolve(from) )
        await rename( resolve(from), resolve(to) )
    } catch {
        app.printMessage('fail')
    }


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

