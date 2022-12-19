import {cp} from "./cp.js";
import { unlink } from 'fs/promises'
import { resolve } from 'path'
import {app} from "../app.js";
import { createReadStream, createWriteStream, constants } from 'fs'
import {getFileName} from "../utils.js";
import { access } from 'fs/promises'
import { stat } from 'fs/promises'

export const mv = async ( args ) => {
        const [from, to, ...empty] = args
        const filename = getFileName( from )

        if ( to.length === 0 || from.length === 0 || empty.length ) return app.printMessage('inval')
        try {
                await access( resolve(from) )
                await access( resolve(to) )
                const readStream  = createReadStream( resolve(from) )
                const writeStream = createWriteStream( resolve(to, filename))

                writeStream.on('error', () => {
                        app.printMessage('fail')
                })

                readStream.on('data', chunk => {
                        writeStream.write(chunk)
                });

                readStream.on('error', () => {
                        app.printMessage('fail')
                })

                readStream.on('end',  () => {
                        writeStream.end()
                })

                readStream.on('close',  () => {
                        unlink( resolve(from) )
                })
        } catch  {
                return app.printMessage('fail')
        }
}

// mv path_to_file path_to_new_directory
// Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
