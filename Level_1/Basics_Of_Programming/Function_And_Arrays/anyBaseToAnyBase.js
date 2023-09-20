/*
Any Base To Any Base

Algorithm:
1. Convert any base to decimal
2. Convert decimal to any base.

Analysis
Time Complexity :
The time complexity calculation shouldn"t be difficult cause it is already discussed in the previous article. And we are just reusing the functions.

So it will be logarithmic. O(log10(n) + log10(n)) = O(log10(n))

SPACE COMPLEXITY :
Space Complexity - We just need to store a few variables like the answer, multiplier and remainder, hence O(1) auxiliary space is required.

*/

function decimalToAnyBase(n, b) {
  let sum = 0, multipler = 1;

  while (n > 0) {
    let digit = n % b;
    sum += (digit * multipler);
    n = Math.floor(n / b);
    multipler *= 10;
  }

  return sum;
}

function anyBaseToDecimal(n, b) {
  let sum = 0, multipler = 1;

  while (n > 0) {
    let digit = n % 10;
    sum += (digit * multipler);
    multipler *= 8;
    n = Math.floor(n / 10);
  }

  return sum;
}

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let b = Number(readLine.question());
let c = Number(readLine.question());

let decNumber = anyBaseToDecimal(n, b);
console.log(decNumber);
let res = decimalToAnyBase(decNumber, c);
console.log(res);
