/*
Pattern 14

3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
...
3 * 9 = 27
3 * 10 = 30

*/

const readLine = require(`readline-sync`);
let x = Number(readLine.question());
console.log();

for (let i = 1; i <= 10; i += 1) {
  let val = x * i;
  console.log(x + " * " + i + " = " + val);
}