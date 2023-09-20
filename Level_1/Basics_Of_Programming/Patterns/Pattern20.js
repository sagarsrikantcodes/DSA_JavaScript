/*
Pattern 20

*     *
*     *
*  *  *
* * * *
*     *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j === 1 || j === n) {
      process.stdout.write("* ");
    } else if (i <= Math.floor(n / 2)) {
      process.stdout.write("  ");
    } else if (i >= Math.floor(n / 2) + 1) {
      if (i === j || i + j === n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
  }
  console.log();
}