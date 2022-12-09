import { rm } from './rm.js'
import {cp} from "./cp.js";

export const mv = async ( args ) => {

    try {
        await cp( args, true )

    } catch (e) {
        // messenger('fail')
    }
}

// mv path_to_file path_to_new_directory
// Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
