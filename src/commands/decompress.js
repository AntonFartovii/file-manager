import { createBrotliDecompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { isFolder } from "../utils.js";
import { parseArgs } from "../utils.js";
import { getFileName } from "../utils.js";

export const decompress = async ( args ) => {

    const [from, to] = parseArgs( args )
    const fileName = getFileName( from )

    const pathFile = resolve( from )
    const pathDest = resolve( to )

    await access ( pathFile )
    await isFolder( to )

    const brotli = createBrotliDecompress ()
    const rs = createReadStream ( pathFile )
    const ws = createWriteStream ( resolve( to ) )

    rs.pipe ( brotli ).pipe ( ws )
}

// compress path_to_file path_to_destination
// Compress file (using Brotli algorithm, should be done using Streams API)

