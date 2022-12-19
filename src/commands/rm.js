import { unlink } from 'fs/promises'
import { resolve } from 'path'
import {app} from "../app.js";
import { access } from 'fs/promises'


export const rm = async ( args ) => {
    let [from, ...empty] = args
    if ( from.length === 0 || empty.length ) return app.printMessage('inval')

    const filePath = resolve( from )
    try {
        await access( filePath )
    } catch {
        return app.printMessage('fail')
    }
    await unlink( filePath )
}

// rm path_to_file

// Invalid input - неверная команда (отсутствует путь) или лишние аргументы
