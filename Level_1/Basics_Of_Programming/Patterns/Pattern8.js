/*
Pattern 8

        *
      *
    *
  *
*


*/

// Code With Implementation 

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let nstar = 1;

for (let i = n; i >= 1; i -= 1) {
  console.log(" ".repeat(i - 1) + "*".repeat(nstar));
  console.log();
}