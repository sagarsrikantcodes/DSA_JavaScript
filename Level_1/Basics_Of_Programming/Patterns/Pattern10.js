/*
Pattern 10

      *
    *   *
  *       *
*           *
  *       *
    *   *
      *


*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let ospaces = Math.floor(n / 2);
let ispaces = -1;


for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= ospaces; j += 1) {
    process.stdout.write("  ");
  }
  process.stdout.write("* ");

  for (let j = 1; j <= ispaces; j += 1) {
    process.stdout.write("  ");
  }

  if (i > 1 && i < n) {
    process.stdout.write("* ");
  }

  if (i <= Math.floor(n / 2)) {
    ospaces -= 1;
    ispaces += 2;
  } else {
    ospaces += 1;
    ispaces -= 2;
  }

  console.log(); // print a new line break
}