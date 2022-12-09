import {cwd, chdir} from 'node:process'

export async function up() {
    return await chdir('..')
}
