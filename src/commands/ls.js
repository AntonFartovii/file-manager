import { messenger } from "../utils/utils.js";
import { readdir } from 'fs/promises'
import { cwd } from 'node:process'

export const ls = async () => {
    try {
        const filesList = await readdir (cwd())
        filesList.forEach(file => { console.log (file) })

    } catch (e) {
        messenger('fail')
    }
}