/*

Pattern 19

* * * *     *
      *     *
      *     *
* * * * * * *
*     * 
*     *
*     * * * *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (i === 1) {
      if (j <= Math.floor(n / 2) + 1 || j === n) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    } else if (i <= Math.floor(n / 2)) {
      if (j === Math.floor(n / 2) + 1 || j === n) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    } else if (i === Math.floor(n / 2) + 1) {
      process.stdout.write("* ");
    } else if (i < n) {
      if (j === 1 || j === Math.floor(n / 2) + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    } else {
      if (j === 1 || j > Math.floor(n / 2)) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
  }

  console.log(); // print new line break
}