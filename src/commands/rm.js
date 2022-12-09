import { unlink } from 'fs/promises'
import { messenger, parseSpace } from "../utils/utils.js";


export const rm = async (fileName) => {
    const name = parseSpace( fileName )
    try {
        await unlink( name )
    } catch (e) {
        messenger('fail')
    }
}