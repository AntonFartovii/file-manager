

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

app.on('cd', cd)    // get folder
app.on('up', up)    // get folder up
app.on('add', add)  // add file
app.on('cat', cat)  // read file
app.on('cp', cp)    // copy file
app.on('ls', ls)    // list of files & folders
app.on('mv', mv)    // move file
app.on('rm', rm)    // remove file
app.on('rn', rn)    // rename file

