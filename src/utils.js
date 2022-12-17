import { stat } from 'fs/promises'
import {app} from "./app.js";
import {access} from 'fs/promises'

export function parseArgs( str ) {
    let acc = []
    str = str.trim()

    function arg ( str ) {

        if ( str !== '' ) {
            let condition = " "
            let k = 0
            if ( str[0] === "'" ) {
                condition = "'"
                k = 1
            }

            for ( let i = k; i < str.length; i++ ) {
                if ( str[i] === condition ) {
                    acc.push( str.slice(k, i) )
                    if ( i + k < str.length ) {
                        arg( str.slice(i + 1, str.length).trim() )
                    }
                    return
                }
            }
            acc.push(str.slice(0, str.length))
            return;
        }
        acc.push('')
    }
    arg(str)
    return acc
}

export function capitalize( str ) {
    return ( typeof str === 'string' )
        ? str.charAt(0).toUpperCase() + str.slice(1)
        : ''
}

export async function isFolder( itemPath ) {
    let stats = await stat( itemPath )
    return stats.isDirectory()
}

export async function isFile( itemPath ) {
    let stats = await stat( itemPath )
    return stats.isFile()
}

export function getFileName( filePath ) {
    let str = filePath.replace(/\\/g, '/');
   return  str.split('/').at(-1)
}

export async function checkArg( arg ) {
    try {
        await access(arg)
    } catch {
        return app.printMessage('fail')
    }
}
