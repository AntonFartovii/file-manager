import process from 'node:process'

import {app} from "./app.js";
import {cd} from "./commands/cd.js";
import {up} from "./commands/up.js";
import {add} from "./commands/add.js";
import {cat} from "./commands/cat.js";
import {cp} from "./commands/cp.js";
import {ls} from "./commands/ls.js";
import {mv} from "./commands/mv.js";
import {rm} from "./commands/rm.js";
import {rn} from "./commands/rn.js";
import {hash} from "./commands/hash.js";
import {osFn} from "./commands/os.js";
import {compress} from "./commands/compress.js";
import {decompress} from "./commands/decompress.js";

app.on('cd', cd)    // get folder
app.on('up', up)    // get folder up
app.on('add', add)  // add file
app.on('cat', cat)  // read file
app.on('cp', cp)    // copy file
app.on('ls', ls)    // list of files & folders
app.on('mv', mv)    // move file
app.on('rm', rm)    // remove file
app.on('rn', rn)    // rename file
app.on('.exit', () => {
    process.exit(0)
})    // exit
app.on('hash', hash)    // calculate hash
app.on('os', osFn)    // os
app.on('compress', compress)    // compress
app.on('decompress', decompress)    // decompress
