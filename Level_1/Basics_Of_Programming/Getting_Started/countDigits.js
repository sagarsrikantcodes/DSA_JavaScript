/*
Count Digits In A Number

Solution Approach:
Dear reader, we have to count the number of digits in the given number. For finding this, we count the number of times that number is divisible by 10.
The count would give us the number of digits constituting the given number.
For example: we are given 9543
It is divided 4 times by 10 & contains 4 digits.

"Every division strips out the last digit"

So, we can effectively conclude that by continuously dividing a number and keeping a count of number of division operations until the dividend turns to 0 will give us the number of digits it is composed of in the form of number of division operations executed.
The algorithm for the same can be illustrated as:

*/

// Code with Implementation 

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let count = 0;

while (n > 0) {
  n = Math.floor(n / 10);
  count += 1;
}

console.log(count);