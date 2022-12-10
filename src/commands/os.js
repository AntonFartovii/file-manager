import {parseArgs} from "../utils.js";
import {stdout} from 'node:process'
import os from 'os'
import {app} from "../app.js";

export const osFn = async ( args ) => {

    const [command, arg] = parseArgs( args )

    switch (command) {
        case '--EOL': {
            stdout.write( JSON.stringify(os.EOL) + '\n' )
            break
        }
        case '--cpus': {
            const cpusInfo = os.cpus()
            console.table( cpusInfo.map( cp =>  {
                return {
                    'Model': cp.model.trim(),
                    'Speed': cp.speed/1000 + ' GHz'
                }
            }))
            break
        }
        case '--homedir': {
            console.log (os.homedir());
            break
        }
        case '--username': {
            console.log (os.userInfo().username);
            break
        }
        case '--architecture': {
            console.log (os.arch());
            break
        }
        default:
            app.printMessage('inval')
            break
    }
}
