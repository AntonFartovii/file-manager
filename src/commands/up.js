import { chdir } from 'node:process'

export async function up() {
    await chdir('..')
}

// up
// Go upper from current directory
// (when you are in the root folder this operation shouldn't change working directory)
