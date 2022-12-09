import {access} from 'fs/promises'
import {join} from 'path'
import {cwd, chdir} from 'node:process'

export async function cd( pathToDir ) {

        // await access ( join(cwd(), pathToDir ))
        console.log(pathToDir)
        return await chdir( pathToDir )
}
