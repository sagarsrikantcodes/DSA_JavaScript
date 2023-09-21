/*
Base Subtraction

1212 - 256 => 956 in base 10 

Pseudo Code:
Input: We will take the base (b) and the numbers n1 and n2 as the input.
Loop: Since the second number is always greater than the first, work inside the while loop till n2>0. Calculate the first digit of each number as n1%10 and n2%10 and the numbers will be reduced to n1=n1/10 and n2=n2/10. If d = d2 - d1 - c > 0, answer will be d*p where p is the power and the carry c=0. Otherwise, d=d+b and ans=d*p and carry c=-1.
Return: After the loop ends, return the answer to the main function where it gets printed.

Analysis
Time Complexity :
O(d) {where d is the number of digits in a larger number} or (log10 n). Why (log10 n)? This is because we are deriving the digits of the number by dividing the number by 10. So, if we keep on dividing the number by 10, the complexity becomes (log10 n). Think about this!!!

SPACE COMPLEXITY :
O(1) as we have not used any extra memory

*/

function getBaseSubtraction(n1, n2, b) {
  let sum = 0, multipler = 1;
  let carry = 0;
  let dig;

  while (n1 > 0 || n2 > 0 || carry > 0) {
    let digit1 = n1 % 10;
    let digit2 = n2 % 10;
    if (carry + digit1 < digit2) {
      dig = carry + digit1 + b - digit2;
      carry = -1;
    } else {
      dig = carry + digit1 - digit2;
      carry = 0;
    }
    sum += (dig * multipler);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    multipler *= 10;
  }

  return sum;
}

const readLine = require(`readline-sync`);
let n1 = Number(readLine.question());
let n2 = Number(readLine.question());
let b = Number(readLine.question());
let res = getBaseSubtraction(n1, n2, b);
console.log(res);