import { createBrotliCompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { getFileName } from "../utils.js";
import { app } from "../app.js";

export const compress = async ( args ) => {

    const [from, to] = args
    if ( to === '' ) return app.printMessage('inval')
    try {
        await access( resolve(from) )
        await access( resolve(to) )
    } catch {
        return app.printMessage('fail')
    }
    const fileName = getFileName( from )
    const brotli = createBrotliCompress ()
    const rs = createReadStream ( resolve( from  ) )
    const ws = createWriteStream ( resolve( to, fileName + '.br' ) )

    rs.pipe ( brotli ).pipe ( ws )
}

// compress path_to_file path_to_destination
// Compress file (using Brotli algorithm, should be done using Streams API)

// Invalid input - неверная команда (отсутствует путь назначения)
// Operation filed - не существует файл или не существует путь сохранения

