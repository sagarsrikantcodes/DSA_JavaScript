/*
Pattern 15

    1
  2 3 4
3 4 5 6 7
  2 3 4
    1

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nspaces = Math.floor(n / 2);
let nstars = 1;
let val = 1;

for (let i = 1; i <= n; i += 1) {

  for (let j = 1; j <= nspaces; j += 1) {
    process.stdout.write("  ");
  }

  let cval = val;

  for (let j = 1; j <= nstars; j += 1) {
    // process.stdout.write("* ");
    if (j <= Math.floor(nstars / 2)) {
      process.stdout.write(cval + " ");
      cval += 1;
    } else {
      process.stdout.write(cval + " ");
      cval -= 1;
    }
  }

  if (i <= Math.floor(n / 2)) {
    nspaces -= 1;
    nstars += 2;
    val += 1;
  } else {
    nspaces += 1;
    nstars -= 2;
    val -= 1;
  }

  console.log();
}