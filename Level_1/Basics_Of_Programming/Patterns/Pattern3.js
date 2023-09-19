/*
Pattern 3

        *
      * *
    * * *
  * * * *
* * * * *

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nspaces = n - 1;
let nstars = 1;

for (let i = 1; i <= n; i += 1) {
  console.log(" ".repeat(nspaces) + "*".repeat(nstars));
  nspaces -= 1;
  nstars += 1;
  console.log();
}