import { stat } from 'fs/promises'
import {app} from "./app.js";
import {access} from 'fs/promises'

export function parseArgs( data ) {
    // i search command name before first space
    const str = data.toString('utf8').trim()
    const l = str.length

    for ( let i = 0; i < l; i++ ) {
        if ( str[i] === ' ' ) {
            return [
                deleteQuote( str.slice(0, i) ),
                deleteQuote( str.slice(i + 1, l).trim() ),
            ]
        }
    }
    return [
        str.slice(0, l),
        ''
    ]
}

export function deleteQuote( str ) {
    if ( str[0] === "'" && str[str.length-1] === "'") {
        return str.slice(1, str.length-1)
    }
    if ( str[0] === "'") {
        return str.slice(1, str.length)
    }
    if ( str[str.length-1] === "'") {
        return str.slice(0, str.length-1)
    }
    return str
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
