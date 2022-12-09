
import process from 'node:process'
import {app} from "./src/app.js";
import './src/commandsRouter.js'
import {parseArgs} from "./src/utils.js";
import {isFolder} from "./src/utils.js";

// console.log( await isFolder('c:/Users/anton/2.txt'));


process.stdin.on('data', async (data) => {

    const [command, args] = parseArgs( data )
    await app.execCommand( command, args )
})

process.on('SIGINT', function () {
    process.exit(0)
})

process.on('SIGTERM', () => {
    process.exit(-1)
})

process.on('exit', () => {
    console.log('я вышел)')
})
