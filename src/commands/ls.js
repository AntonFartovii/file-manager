import { readdir } from 'fs/promises'
import { cwd } from 'node:process'
import {app} from "../app.js";

export const ls = async ( args ) => {
    if ( args.length !== 0 ) return app.printMessage('inval')
    const itemsList = await readdir ( cwd(), {withFileTypes: true} )
    const obj = {
        'directory': [],
        'file': []
    }
    for( const item of itemsList ) {
        const Type = item.isFile() ? 'file' : 'directory'
            obj[Type].push({
                'Name': item.name,
                 Type
            })
    }
    console.table( [
        ...obj.directory.sort( (a, b) => a['Name'].localeCompare(b['Name']) ),
        ...obj.file.sort( (a, b) => a['Name'].localeCompare(b['Name'])) ] )
}
// вывод в таблице по ТЗ с сортировкой - сначала директории, затем файлы

// ls

// Print in console list of all files and folders in current directory. List should contain:
//     list should contain files and folder names (for files - with extension)
//     folders and files are sorted in alphabetical order ascending, but list of folders goes first
//     type of directory content should be marked explicitly (e.g. as a corresponding column value)
