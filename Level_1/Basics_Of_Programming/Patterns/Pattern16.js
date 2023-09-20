/*
Pattern 16

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nspaces = (n * 2) - 3;
let nstars = 1;

for (let i = 1; i <= n; i += 1) {
  let val = 1;
  for (let j = 1; j <= nstars; j += 1) {
    process.stdout.write(val + " ");
    val += 1;
  }

  for (let j = 1; j <= nspaces; j += 1) {
    process.stdout.write("  ");
  }

  if (i === n) {
    nstars -= 1;
    val -= 1;
  }

  for (let j = 1; j <= nstars; j += 1) {
    val -= 1;
    process.stdout.write(val + " ");
  }

  nstars += 1;
  nspaces -= 2;
  console.log();

}