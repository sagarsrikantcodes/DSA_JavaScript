/*
Reverse a Number

Solution:
We have to reverse print a number vertically. For instance, if we have a number 754, it will be printed as shown. (You may refer to the question video if you didn't get the question).

Approach:
So coder, did you get any ideas from the sample input shown. If not, then don't worry. The problem is actually simple as compared to the "digits of a number" problem which was the previous one. We just have to print the number in reverse and for this we don't even have to count the digits of the number.
Take 754 for instance & keep dividing it by 10 and extracting the digit to display by storing the remainder of the division until the number becomes zero or while the number was greater than zero. The process is shown in the figure below:

We took the number 754 and divided it by 10. So the number becomes 75 and the remainder (on dividing the number by 10: {754%10=4}) was printed. This process continues until the number is greater than 0. When the number becomes zero, we stop. If you are stuck anywhere, you are requested to watch the solution video . You can also refer to the code given below:

Here digit is actually the remainder which is left after division by 10. We have shown below the dry run of the above code for 754.

*/

const readLine = require(`readline-sync`);
let number = Number(readLine.question());
let sum = 0;
let temp = number;
let nod = 0;
while (temp > 0) {
  temp = Math.floor(temp / 10);
  nod += 1;
}

let multipler = Math.pow(10, nod - 1);

while (number > 0) {
  let dig = number % 10;
  sum += dig * multipler;
  number = Math.floor(number / 10);
  multipler = Math.floor(multipler / 10);
}

console.log(sum);

