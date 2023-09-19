/*
Pattern 4

* * * * *
  * * * *
    * * *
      * *
        *

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

let nstars = n;
let nspaces = 0;
for (let i = 1; i <= n; i += 1) {
  console.log(" ".repeat(nspaces) + "*".repeat(nstars));
  nspaces += 1;
  nstars -= 1;
}
