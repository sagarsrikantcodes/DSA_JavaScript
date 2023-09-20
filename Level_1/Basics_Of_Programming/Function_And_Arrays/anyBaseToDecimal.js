/*
Any Base to Decimal

Algorithm:
1. Declare and Create a variable named `sum` and initialize it to 0.
2. Declare and Create a variable named `multipler` and initialize it to 1.
3. As long as the number, n is greater than 0 run a while loop.
  - Declare and Create a variable named `digit` and assign it as the remainder of n divided by 10.
  - Reassign sum to sum plus digit multiplied by multipler. 
  - Reassign the value of n to its current value divided by 10. 
  - Reassign the multipler to its current value multiplied by b.
4. Return the value of sum to the calling function. 

Analysis
Time Complexity :
We are extracting digits of number n and performing some minute calculations, which will take O(log10 n) time as there can be maximum floor(log10 n) digits in a number n.

SPACE COMPLEXITY :
Space Complexity - We just need to store a few variables like the answer, multiplier and remainder, hence O(1) auxiliary space is required.

*/

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
let d = anyBaseToDecimal(n, b);
console.log(d);