import * as child_process from "node:child_process";
import * as path from "node:path";

console.log(path.resolve());
child_process.exec("pwd; env; echo main; npm version;", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});