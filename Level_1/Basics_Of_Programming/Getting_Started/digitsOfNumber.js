/*
Digits of a Number

Solution:
We have to print the given number by breaking it into a sequence of digits. For instance, if we have a number 754, it will be printed as shown. (You may refer to the question video if you didn't get the question).

Approach:
So coder, did you get any ideas from the sample input shown? Don't worry if you didn't, it's just the beginning. The solution is quite straight-forward. We start dividing it with 100(10^(3-1)) where 3 is the number of digits in 754. After each division, the divisor is divided by 10.

The figure above explains the procedure for separating the digits of a number. We first divided the number by 100 in order to get the first digit 7. We did this because 100= 102 and 2=(3-1) and there are 3 digits in the number. So, now it is clear that we first need to find the number of digits in the number and then we can proceed with the procedure shown above. If you have any doubts regarding the above procedure of separating the digits please watch the solution video.

Now we first have to find the number of digits in the given number. This can be done very easily, we keep dividing the number by 10 and increment the digit's count until the number becomes zero. It is shown in the figure below:.

We have divided 754 by 10 and the number now becomes 74. Initially the variable nod (Number of Digits) was 0 and now it has been incremented to 1. Similarly we keep on dividing until the number becomes zero and also we keep on incrementing the value of nod variable. If you are confused with this code, don't worry. You can have a look at the code shown below and also you can watch the solution video.


*/

// Code with Implementation 

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let temp = n;
let nod = 0;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  nod += 1;
}

let multipler = Math.pow(10, nod - 1);
let sum = 0;

while (n > 0) {
  let digit = Math.floor(n / multipler);
  // console.log(digit);
  sum += digit * multipler;
  n = n % multipler;
  multipler = Math.floor(multipler / 10);
}

console.log(sum);


