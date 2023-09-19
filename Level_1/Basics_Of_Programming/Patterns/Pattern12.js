/*
Pattern 12

0
1 1
2 3 5
8 13 21 34
55 89 144 233 377



*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let a = 0, b = 1;
console.log();

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= i; j += 1) {
    if (i === 1 && j === 1) {
      process.stdout.write(a + " ");
    } else if (i === 2 && j === 1) {
      process.stdout.write(b + " ");
    } else {
      let sum = a + b;
      process.stdout.write(sum + " ");
      a = b;
      b = sum;
    }
  }

  console.log(); // print new line break
}

