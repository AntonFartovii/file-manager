import {parseArgs} from "../utils.js";
import {app} from "../app.js";
import {createReadStream} from 'fs'
import {stdout} from 'node:process'
import {resolve} from 'path'
import {createHash} from 'crypto'

export const hash = async ( args ) => {

    let [filename, arg] = parseArgs( args )
    let filePath = resolve( filename )
    const stream = createReadStream( filePath )

    let content = ''
    stream.on('error', () =>{
        app.printMessage('fail')
    })

    stream.on('data',  chunk => {
        content += chunk
    })

    stream.on('end', () => {
        const hash = createHash('sha256').update(content).digest('hex')
        stdout.write ( `File's hash:\n` )
        stdout.write ( hash + '\n' )
        app.printMessage('curDir')
    })
}


