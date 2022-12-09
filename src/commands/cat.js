
import process from 'node:process'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import { access } from 'fs/promises'

export const cat = async (fileName) => {

    const filePath = resolve( fileName )

    try {
        await access ( filePath )
        const stream = createReadStream( filePath )

        let body = ''
        stream.on('data',  chunk => {
            body += chunk
        })

        stream.on('end', () => {
            process.stdout.write ( `File's content:\n` )
            process.stdout.write ( body + '\n' )
            // messenger('curDir');
        })

        stream.on('error', () => {
            // messenger('fail');
            return
        })

        stream.on('finish', () => {
            // messenger('curDir');
        })
    } catch (e) {
        // messenger('fail')
    }

}

// cat path_to_file
