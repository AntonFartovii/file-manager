import { messenger, parseSpace } from "../utils/utils.js";
import { cwd } from 'node:process'
import { join } from 'path'
import { createWriteStream } from 'fs'
import { access } from 'fs/promises'

export const add = async (fileName) => {

    const name = parseSpace( fileName )
    const pathFile = join( cwd(), name )


    try {
        console.log ( pathFile )
        const  writeStream = createWriteStream( pathFile  )
        writeStream.write('')
        writeStream.end('')

    } catch (e) {
        messenger('fail')
    }
}