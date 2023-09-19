/*

Pattern 11

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let num = 1;
console.log();

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= i; j += 1) {
    process.stdout.write(num + " ");
    num += 1;
  }
  console.log(); // print new line break
}

