import process from 'node:process'
import {app} from "./src/app.js";
import './src/commandsRouter.js'
import {parseArgs} from "./src/utils.js";

process.stdin.on('data', async (data) => {

    const [command, args] = parseArgs( data )
    try {
        await app.execCommand( command, args )
        await app.printMessage('curDir')
    } catch {
        await app.printMessage('inval')
        await app.printMessage('curDir')
    }
})

process.on('SIGINT', async () => {
    process.exit(0)
})

process.on('SIGTERM', () => {
    process.exit(-1)
})

process.on('exit', async () => {
    await app.printMessage('bye')
})
