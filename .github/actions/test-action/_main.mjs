import * as child_process from "node:child_process";
import * as path from "node:path";

console.log(import.meta.url);

child_process.exec("pwd; env; echo main; npm version; cat $GITHUB_EVENT_PATH", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
