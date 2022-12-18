import { unlink } from 'fs/promises'
import { resolve } from 'path'
import {app} from "../app.js";
import { access } from 'fs/promises'


export const rm = async ( args ) => {
    let [from] = args

    if ( from === '' ) return app.printMessage('inval')

    const filePath = resolve( from )
    try {
        await access( filePath )
    } catch {
        return app.printMessage('fail')
    }
    await unlink( filePath )
}

// rm path_to_file
