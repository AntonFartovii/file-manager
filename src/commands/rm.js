import { unlink } from 'fs/promises'
import { getFileName, parseArgs } from "../utils.js";
import { resolve } from 'path'
// import { messenger, parseSpace } from "../utils/utils.js";



export const rm = async ( args ) => {
    let [from, to] = parseArgs( args )

    const filePath = resolve( from )
    try {
        await unlink( filePath )
    } catch (e) {
        // messenger('fail')
    }
}

// rm path_to_file
