
import { cwd } from 'node:process'
import { join } from 'path'
import { createWriteStream } from 'fs'

export const add = async (fileName) => {

    const pathFile = join( cwd(), fileName )

    try {
        const writeStream = createWriteStream( pathFile  )
        writeStream.write('')
        writeStream.end('')

    } catch {
    }
}
