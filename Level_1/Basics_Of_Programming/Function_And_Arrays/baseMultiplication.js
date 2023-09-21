/*
Any Base Multiplication 

2156
* 74
------
 10670
174020
-------
204710

Pseudo Code
Main Function:
0. Declare and create variable `multipler` and initialize it to 1.
1. Declare and create variable `sum` and initialize it to 0.
2. Declare and create variable `carry` and initialize it to 0.
3. As long as n2 is greater than 0 run a while loop
  - Extract the digits from the right of n2 respectively.
  - Invoke the function to obtain productwithSingleDigit.
  - Multiple the productWithSingleDigit by the multipler.
  - Reassign the sum by invokving the function having the current base, sum and productWithSingleDigit.
  - Reassign the multipler to multipler * 10.
  - Reassign n2 to n2 / 10.
4. Return the sum to the calling function.

Algorithm for Function getProductWithSingleDigit(n1, n2, b):
0. Declare and Create a variable named multipler and initialize it to 1.
1. Declare and Create a variable named carry and initialize it to 0.
2. Declare and Create a variable named sum and initialize it to 0.
3. As long as n1 is greater than 0, run a while loop.
  - extract the digit from n1
  - Mulitply digit d1 with n2 and add carry.
  - reassign carry to res / b
  - reassign dig to res % b
  - reassign sum to sum + (dig * multipler)
  - reassign n1 to n1 / 10
  - reassign multipler to multipler * 10
4. Return sum to the calling function. 

Algorithm for Function getSum(n1, n2, b):
1. Declare and Create a variable named sum and initilize it to 0.
2. Declare and Create a variable named multipler and initialize it to 1.
3. Declare and Create a variable named carry and initialize it to 0.
4. Run a while loop as long n1 > 0 OR n2 > 0 OR carry > 0:
  - Extract digits from n1 and n2 respectively.
  - Obtain the result from d1, d2 and carry by adding them.
  - Obtain the carry by result / b
  - Obtain the digit by result % b
  - sum = sum + (digit * multipler) 
  - multipler = multipler * 10
  - n1 = n1 / 10
  - n2 = n2 / 10
5. Return the sum to the calling function.

*/

function getProductWithSingleDigit(n1, n2, b) {
  let multipler = 1;
  let carry = 0;
  let sum = 0;
  let dig;

  while (n1 > 0 || carry > 0) {
    let d1 = n1 % 10;
    let res = d1 * n2 + carry;
    carry = Math.floor(res / b);
    dig = res % b;
    sum += (dig * multipler);
    n1 = Math.floor(n1 / 10);
    multipler *= 10;
  }

  return sum;
}

function getSum(n1, n2, b) {
  let sum = 0;
  let carry = 0;
  let multipler = 1;

  while (n1 > 0 || n2 > 0 || carry > 0) {
    let d1 = n1 % 10;
    let d2 = n2 % 10;
    let sumWithDigit = d1 + d2 + carry;
    carry = Math.floor(sumWithDigit / b);
    dig = sumWithDigit % b;
    sum += (dig * multipler);
    multipler *= 10;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

function getProduct(n1, n2, b) {
  let multipler = 1;
  let sum = 0;

  while (n2 > 0) {
    let d2 = n2 % 10;
    let prodWithSingleDigit = getProductWithSingleDigit(n1, d2, b);
    console.log(prodWithSingleDigit);
    prodWithSingleDigit *= multipler;
    sum = getSum(sum, prodWithSingleDigit, b);
    multipler *= 10;
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

console.log(getProduct(2156, 74, 8)); // 204710





