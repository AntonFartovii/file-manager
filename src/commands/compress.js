import { createBrotliCompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { isFolder } from "../utils.js";
import { parseArgs } from "../utils.js";
import { getFileName } from "../utils.js";

export const compress = async ( args ) => {

    const [from, to] = parseArgs( args )
    const fileName = getFileName( from )
    const newFileName = fileName.split('.')[0] + '.br'

    const pathFile = resolve( from  )
    const pathDest = resolve( to, newFileName )

    await access ( pathFile )
    await isFolder( to )

    const brotli = createBrotliCompress ()
    const rs = createReadStream ( pathFile )
    const ws = createWriteStream ( pathDest )

    rs.pipe ( brotli ).pipe ( ws )
}

// compress path_to_file path_to_destination
// Compress file (using Brotli algorithm, should be done using Streams API)

