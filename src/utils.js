import process, {chdir, cwd} from 'node:process'
import {stat} from 'fs/promises'


export function parseArgs( data, ) {
    // i search command name before first space
    const str = data.toString('utf8').trim()
    const l = str.length

    for ( let i = 0; i < l; i++ ) {
        if ( str[i] === ' ' ) {
            return [
                str.slice(0, i),
                str.slice(i + 1, l).trim()
            ]
        }
    }
    return [
        str.slice(0, l),
        ''
    ]
}

export function getHomedir() {
    return process.env.HOME || process.env.USERPROFILE;
}

export function getUsername() {
    const argv = process.argv.slice(2).toString().trim()
    return !argv.startsWith('--')
        ? 'Username'
        : capitalize( argv.split('=')[1] )
}

export function capitalize( str ) {
    return ( typeof str === 'string' )
        ? str.charAt(0).toUpperCase() + str.slice(1)
        : ''
}

export function setStartingDir() {
    const homeDir = getHomedir()
    try {
        chdir ( homeDir );
        // console.log('[Function] current path: ' + cwd())
    } catch (err) {
        process.stdout.write (`chdir: ${err}`)
    }
}

export async function isFolder( itemPath ) {
    let stats = await stat( itemPath )
    return stats.isDirectory()
}


export function getFileName( filePath ) {
    let str = filePath.replace(/\\/g, '/');
   return  str.split('/').at(-1)

}
