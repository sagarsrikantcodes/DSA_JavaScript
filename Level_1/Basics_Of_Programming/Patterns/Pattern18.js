/*

Pattern 18

* * * * * * *
  *       *
    *   *
      *
    * * *
  * * * * *
* * * * * * *

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nstars = n;
let nspaces = 0;
console.log();

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= nspaces; j += 1) {
    process.stdout.write("  ");
  }

  for (let j = 1; j <= nstars; j += 1) {
    // process.stdout.write("* ");
    if (i > 1 && i <= Math.floor(n / 2) && j > 1 && j < nstars) {
      process.stdout.write("  ");
    } else {
      process.stdout.write("* ");
    }
  }

  if (i <= Math.floor(n / 2)) {
    nspaces += 1;
    nstars -= 2;
  } else {
    nspaces -= 1;
    nstars += 2;
  }

  console.log();
}