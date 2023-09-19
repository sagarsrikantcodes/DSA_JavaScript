/*
Pattern 9

Input:
n = 5

Output:

*       *
  *   *
    *
  *   *
*       *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (i + j === n + 1 || i === j) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}



