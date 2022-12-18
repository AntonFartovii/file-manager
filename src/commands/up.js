import { chdir } from 'node:process'
import {app} from "../app.js";

export async function up( args ) {
    if ( args.length !== 0 ) return app.printMessage('inval')
    await chdir('..')
}

// up
// Go upper from current directory
// (when you are in the root folder this operation shouldn't change working directory)
