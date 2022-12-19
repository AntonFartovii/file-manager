import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process'
import process from 'node:process'
import { app } from "./src/app.js";
import './src/commandsRouter.js'
import { parseArgs } from "./src/utils.js";

const readline = createInterface({
    input,
    output
})

readline.on('line', async (data) => {
    readline.pause()
    const [command, ...args] = parseArgs( data )
    try {
        await app.execCommand( command, args )
        await app.printMessage('curDir')
    } catch (error) {
        await app.printMessage('inval')
        await app.printMessage('curDir')
    }
    readline.prompt()
})

readline.on('SIGINT', () => {
    readline.close()
})

readline.on ('close',  () => {
    process.exit(0)
})

readline.on ('error',  ()=> {
    app.printMessage('fail')
});

process.on('exit', () => {
    app.printMessage('bye')
})
