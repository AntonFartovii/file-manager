import { messenger } from "../utils/utils.js";
import { rename } from 'fs/promises'
import { access } from 'fs/promises'
import { cwd } from 'node:process'
import { join } from 'path'

// rn path_to_file new_filename

export const rn = async (arg) => {
    const src  = arg[0]
    const dest = arg[1]

    try {
        await access ( join(cwd(), src ))
        await rename( src, dest )
    } catch (e) {
        messenger('fail')
    }
}