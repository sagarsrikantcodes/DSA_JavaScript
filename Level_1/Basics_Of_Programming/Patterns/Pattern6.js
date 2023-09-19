/*

Pattern 6

* * *   * * *
* *       * *
*           *
* *       * *
* * *   * * *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nstars = Math.floor(n / 2) + 1;
let nspaces = 1;

for (let i = 1; i <= n; i += 1) {

  console.log("*".repeat(nstars) + " ".repeat(nspaces) + "*".repeat(nstars));

  if (i <= Math.floor(n / 2)) {
    nstars -= 1;
    nspaces += 2;
  } else {
    nstars += 1;
    nspaces -= 2;
  }

  console.log();
}