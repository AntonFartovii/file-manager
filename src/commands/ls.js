import { readdir } from 'fs/promises'
import { cwd } from 'node:process'

export const ls = async () => {
        const itemsList = await readdir ( cwd(), {withFileTypes: true} )
        const table = []

        for( const item of itemsList ) {
            table.push({
                'Name': item.name,
                'Type': item.isFile() ? 'file' : 'directory'
            })
        }
        console.table( table )
}

// ls

// Print in console list of all files and folders in current directory. List should contain:
//     list should contain files and folder names (for files - with extension)
//     folders and files are sorted in alphabetical order ascending, but list of folders goes first
// type of directory content should be marked explicitly (e.g. as a corresponding column value)
