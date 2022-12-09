import { messenger, parseSpace } from "../utils/utils.js";
import { cwd } from 'node:process'
import { createReadStream } from 'fs'
import { join } from 'path'
import { access } from 'fs/promises'

export const cat = async (fileName) => {

    let name = parseSpace( fileName )
    const dest = join( cwd(), name )
    const pathFile = join(cwd(), name  )

    try {
        await access ( pathFile )

        const stream = createReadStream(  dest )

        let body = ''

        stream.on("data",  chunk => { body += chunk } )

        stream.on('end',   () => {
            process.stdout.write ( body + '\n' )
            messenger('curDir');
        })

        stream.on('error', () => {
            messenger('fail');


            return
        })
        stream.on('finish', () => {
            messenger('curDir');
        })
    } catch (e) {
        messenger('fail')
    }

}