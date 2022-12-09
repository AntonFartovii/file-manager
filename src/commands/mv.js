import { messenger, getAccess } from "../utils/utils.js";
import { cwd } from 'node:process'
// import { copyFile } from 'fs/promises'
import { join } from 'path'
import { isFolder } from "../utils/utils.js"
import { access } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import fs from 'fs'
import { rm } from './rm.js'

export const mv = async (arg) => {
    const src  = arg[0]
    const dest = arg[1]

    // cp path_to_file path_to_new_directory
    try {
        await access ( join ( cwd(), src) )
        await isFolder( dest )
        const readStream  = createReadStream( src )
        const writeStream = createWriteStream( join (dest, src)  )

        writeStream.write('')

        readStream.on('data', chunk => {
            writeStream.write(chunk)
        });

        readStream.on('end', () => {
            writeStream.end()
        })

        readStream.on('close', function () {
            rm(src)
        });

        readStream.on('error', () => {

        });
        writeStream.on('error', () => {

        });



        readStream.pipe(writeStream);

    } catch (e) {
        messenger('fail')
    }
}