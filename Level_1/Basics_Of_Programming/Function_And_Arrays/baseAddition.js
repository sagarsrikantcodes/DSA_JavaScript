/*
Any Base Addition

base 8 addition 

236
754

----
1212

Analysis
Time Complexity :
For finding time complexity always try to look for loops (for loops, or while loops) and find the iterations. Here we can see the while loop will run as long as n1, n2, or c is non-zero. And in each iteration what operation are we performing? Division. Hence it might be logarithmic. Clearly, the loop will run at least the number of digits of the maximum number. Why maximum? Because we always look for the upper bound. There might be one extra for the carry.

If n is a number then what is the length ( number of digits ) in that number? (log10 n)

If you are not aware of why this is the case, please revisit the article Digits of a number.

So, we can say the Big-O for this problem will be (log10(max(n1, n2) + 1), but we can ignore the 1 since it"s a constant.

O(log10(max(n1, n2) + 1)

SPACE COMPLEXITY :
We are not using any auxiliary space at all, hence it"sO(1). Constant Space.


*/

function baseAddition(n1, n2, b) {
  let carry = 0;
  let multipler = 1;
  let sum = 0;
  let sumOfDigits;

  while (n1 > 0 || n2 > 0) {
    let dig1 = n1 % 10;
    let dig2 = n2 % 10;
    sumOfDigits = carry + dig1 + dig2;
    carry = Math.floor(sumOfDigits / b);
    let dig = sumOfDigits % b;
    sum += (dig * multipler);
    multipler *= 10;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  sumOfDigits = carry;
  carry = Math.floor(sumOfDigits / b);
  dig = sumOfDigits % b;
  sum += (dig * multipler);

  return sum;
}

const readLine = require(`readline-sync`);
let n1 = Number(readLine.question());
let n2 = Number(readLine.question());
let b = Number(readLine.question());
let res = baseAddition(n1, n2, b);
console.log(res);
