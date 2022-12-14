import { access } from 'fs/promises'
import { resolve } from 'path'
import { chdir } from 'node:process'
import { app } from "../app.js";

export async function cd( args ) {

        if ( args === '' || undefined ) {
                return app.printMessage('fail')
        }
        const pathToDir = resolve( args )
        // console.log('pathToDir: ', pathToDir)
        await access ( pathToDir )
        await chdir( pathToDir )
}

// cd path_to_directory
// cd 'path_to_directory'
// cd directory/directory
// cd 'directory\directory'

// Go to dedicated folder from current directory (path_to_directory can be relative or absolute)

