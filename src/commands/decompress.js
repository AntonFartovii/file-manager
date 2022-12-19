import { createBrotliDecompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { getFileName } from "../utils.js";
import { app } from "../app.js";

export const decompress = async ( args ) => {

    const [from, to, ...empty] = args
    if ( to.length === 0 || from.length === 0 || empty.length ) return app.printMessage('inval')
    try {
        await access( resolve(from) )
        await access( resolve(to) )
    } catch {
        return app.printMessage('fail')
    }
    const fileName = getFileName( from )
    const brotli = createBrotliDecompress ()
    const rs = createReadStream ( resolve( from ) )
    const ws = createWriteStream ( resolve( to, fileName.replace('.br', '') ) )

    rs.pipe ( brotli ).pipe ( ws )
}

// compress path_to_file path_to_destination
// Compress file (using Brotli algorithm, should be done using Streams API)

