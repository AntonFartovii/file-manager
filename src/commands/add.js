import { resolve } from 'path'
import { createWriteStream } from 'fs'

export const add = async ( fileName ) => {

    const filePath = resolve( fileName )
    const writeStream = createWriteStream( filePath )
    writeStream.write('')
    writeStream.end('')
}

// add new_file_name
// Task: Create empty file in current working directory:

// test commands:
// add fartovii.txt
// add C:\Users\fartovii.txt'
// add 'C:/Users/fartovii.txt'

