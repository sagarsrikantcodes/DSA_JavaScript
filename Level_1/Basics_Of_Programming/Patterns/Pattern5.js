/*
Pattern 5

n = 7

      *
    * * *
  * * * * *    
* * * * * * *
  * * * * *
    * * *
      *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nstars = 1;
let nspaces = Math.floor(n / 2);

for (let i = 1; i <= n; i += 1) {
  console.log(" ".repeat(nspaces) + "*".repeat(nstars));

  if (i <= Math.floor(n / 2)) {
    nspaces -= 1;
    nstars += 2;
  } else {
    nspaces += 1;
    nstars -= 2;
  }

  console.log();
}