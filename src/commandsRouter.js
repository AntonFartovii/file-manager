

import {app} from "./app.js";
import {cd} from "./commands/cd.js";
import {up} from "./commands/up.js";
import {add} from "./commands/add.js";
import {cat} from "./commands/cat.js";
import {cp} from "./commands/cp.js";
import {ls} from "./commands/ls.js";
// import {mv} from "./commands/mv.js";
// import {rm} from "./commands/rm.js";
// import {rn} from "./commands/rn.js";

app.on('cd', cd)
app.on('up', up)
app.on('add', add)
app.on('cat', cat)
app.on('cp', cp)
app.on('ls', ls)
// app.on('mv', mv)
// app.on('rm', rm)
// app.on('rn', rn)

