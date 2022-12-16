import { unlink } from 'fs/promises'
import { resolve } from 'path'
import {app} from "../app.js";



export const rm = async ( args ) => {
    let [from] = args

    if ( from === '' ) return app.printMessage('inval')

    const filePath = resolve( from )
    await unlink( filePath )
}

// rm path_to_file
