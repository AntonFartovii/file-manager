import { unlink } from 'fs/promises'
import { getFileName, parseArgs } from "../utils.js";
import { resolve } from 'path'
import {app} from "../app.js";
// import { messenger, parseSpace } from "../utils/utils.js";



export const rm = async ( args ) => {
    let [from, to] = parseArgs( args )

    if ( from === '' ) return app.printMessage('inval')

    const filePath = resolve( from )
    await unlink( filePath )
}

// rm path_to_file
