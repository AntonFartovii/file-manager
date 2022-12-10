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

readline.on('SIGINT', () => {
    readline.close()
})

readline.on ('close',  () => {
    process.exit()
})

readline.on('line', async (data) => {

    const [command, args] = parseArgs( data )
    try {
        await app.execCommand( command, args )
        await app.printMessage('curDir')
    } catch {
        await app.printMessage('inval')
        await app.printMessage('curDir')
    }
})

readline.on ('error',  ()=> {
    app.printMessage('fail')
});

process.on('exit', () => {
    app.printMessage('bye')
})
