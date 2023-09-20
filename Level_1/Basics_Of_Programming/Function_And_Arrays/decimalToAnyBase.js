/*
Decimal to Any Base

Algorithm:
0. Declare and Create a variable named `multipler` and initialize it to 1.
1. Declare and Create a variable named `sum` and initialize it to 0.
2. Run a while loop as long as the number, n is greater than 0.
  - Declare and Create a variable named digit and assign it to the remainder of n and b.
  - Reassign sum to sum plus digit multipled by the multipler.
  - Reassign n to n divided by b
3. Return the `sum` to the calling function. 

Analysis
Time Complexity
We are extracting digits of number n and performing some minute calculations, which will take O(log10 n) time as there can be maximum floor(log10 n) digits in a number n.

Space Complexity
We just need to store a few variables like the answer, multiplier and remainder, hence O(1) auxiliary space is required.

*/

function getValueInBase(n, b) {
  let multipler = 1, sum = 0;

  while (n > 0) {
    let digit = n % b;
    sum += (digit * multipler);
    n = Math.floor(n / b);
    multipler *= 10;
  }

  return sum;
}

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let b = Number(readLine.question());
console.log(getValueInBase(n, b));
