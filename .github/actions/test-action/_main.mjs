import * as process from "node:process";
import * as child_process from "node:child_process";
import * as util from "node:util";

console.log(process.env);
const spawn = util.promisify(child_process.spawn);
await spawn("echo", ["main"])
await spawn("npm", ["version"])