// import { messenger } from "../utils/utils.js";
import { readdir } from 'fs/promises'
import { cwd } from 'node:process'

export const ls = async () => {
    try {
        const itemsList = await readdir ( cwd(), {withFileTypes: true} )
        const table = []

        for( const item of itemsList ) {
            table.push({
                'Name': item.name,
                'Type': item.isFile() ? 'file' : 'directory'
            })
        }
        console.table( table )
    } catch {
        // messenger('fail')
    }
}
