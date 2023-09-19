/*
Pattern 13

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

*/

function factorial(number) {
  if (number === 0) {
    return 1;
  }

  let fact = 1;

  for (let i = 1; i <= number; i += 1) {
    fact *= i;
  }

  return fact;
}

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let iCj;
console.log();

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= i; j += 1) {
    iCj = Math.floor(factorial(i) / (factorial(j) * factorial(i - j)));
    process.stdout.write(iCj + " ");
  }
  console.log();
}