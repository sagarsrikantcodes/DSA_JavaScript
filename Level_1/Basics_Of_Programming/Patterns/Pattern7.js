/*
Pattern 7

*
  *
    *
      *
        *
        
*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nspaces = 0;
let nstars = 1;

for (let i = 1; i <= n; i += 1) {
  console.log("  ".repeat(i - 1) + "*".repeat(nstars));
  console.log();
}