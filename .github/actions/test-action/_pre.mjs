import * as process from "node:process";
import * as child_process from "node:child_proess";
import * as util from "node:util";

console.log(process.env);
const spawn = util.promisify(child_process.spawn);
await spawn("echo", ["pre"])
await spawn("npm", ["version"])