/*
Print Fibonacci Numbers Till N

Solution Approach:
Dear readers, let's discuss this question on printing Fibonacci numbers. In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

Therefore the first few terms of the sequence go like this:
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 ,...
The base condition for the Fibonacci series is that it starts with 0 and 1, and then keeps on adding the preceding two terms to form the next term.


Algorithm: 
1. Start with a = 0, b = 1

2. Repeat for n times:
  - Print a
  - Set c = a + b
  - Set a = b
  - Set b = c

We first print a, the first Fibonacci number (starting with 0) and then constantly update the variables a, b and c according to the Fibonacci series rules.
We assume a to be the first Fibonacci number and b as the second Fibonacci number. After the first iteration, we shift a and b by one step each. Now, a is the second Fibonacci number and b is the third Fibonacci number number which is achieved by
c= a +b //Setting the new number as the sum of previous two numbers
a=b //a is moved by one step and attains the value of b
b=c // b is moved by one step and attains the value of the new number c

*/

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

let a = 0, b = 1;
let count = 0;

while (count <= n) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
  count += 1;
}