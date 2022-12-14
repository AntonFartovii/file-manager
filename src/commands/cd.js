import { access } from 'fs/promises'
import { resolve } from 'path'
import { chdir } from 'node:process'
import { app } from "../app.js";
import { stat } from 'fs/promises'

export async function cd( args ) {
        let [src, ...empty] = args
        if ( src === '' || empty.length ) return app.printMessage('inval')

        const pathToDir = resolve( src )
        try {
                await access ( pathToDir )
        } catch {
                return app.printMessage('fail')
        }

        let stats = await stat( pathToDir )
        if ( stats.isFile() ) return app.printMessage('fail')

        await chdir( pathToDir )
}

// cd path_to_directory
// cd 'Some folder'
// cd directory/directory
// cd 'directory\directory'

// Go to dedicated folder from current directory (path_to_directory can be relative or absolute)

// Invalid input - incorrect command
// Operation failed - not exist path
