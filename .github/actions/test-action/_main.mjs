import * as process from "node:process";
import * as child_process from "node:child_process";
import * as util from "node:util";

console.log(process.env);
const exec = util.promisify(child_process.exec);
await exec("echo main");
await exec("npm version")