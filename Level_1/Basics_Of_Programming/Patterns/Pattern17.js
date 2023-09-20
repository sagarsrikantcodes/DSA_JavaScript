/*
Pattern 17

    *    
    * *
* * * * *
    * *
    * 


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nstars = 1;
let nspaces = Math.floor(n / 2);

for (let i = 1; i <= n; i += 1) {
  if (i === Math.floor(n / 2) + 1) {
    for (let j = 1; j <= n; j += 1) {
      process.stdout.write("* ");
    }
  } else {
    for (let j = 1; j <= nspaces; j += 1) {
      process.stdout.write("  ");
    }

    for (let j = 1; j <= nstars; j += 1) {
      process.stdout.write("* ");
    }
  }

  if (i <= Math.floor(n / 2)) {
    nstars += 1;
  } else {
    nstars -= 1;
  }

  console.log();
}