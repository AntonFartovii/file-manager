import {access} from 'fs/promises'
import {join} from 'path'
import {cwd, chdir} from 'node:process'

export async function cd( pathToDir ) {

        // await access ( join(cwd(), pathToDir ))
        console.log(pathToDir)
        await chdir( pathToDir )
}

// Go to dedicated folder from current directory (path_to_directory can be relative or absolute)
// cd path_to_directory
