/*

Problem Discussion :
In this problem you have to check whether a given number is prime or not.

A prime number is a number that is only divisible by itself and 1.

At first you need to take a number "t" as input representing the count of input numbers to be tested. And then take a number "n" as input, "t" number of times.

All you have to do is for each input value of n, print "prime" if the number is prime and "not prime" otherwise.

For example:
Sample Input:

5
13
2
3
4
5
Sample Output:

prime
prime
prime
not prime
prime

Analysis
Time Complexity:
O(t * square root n)

A for loop runs for t times and for each iteration a while loop runs for root n times making the time complexity of this program to be O(t * sq.rt(n)).

Space Complexity:
O(1)

Since no effective extra space has been used, therefore the time complexity of the program remains constant.

*/

const readLine = require(`readline-sync`);
let t = Number(readLine.question());

for (let i = 0; i < t; i += 1) {
  let n = Number(readLine.question());
  let count = 0;

  for (let div = 2; div * div <= n; div += 1) {
    if (n % div === 0) {
      count += 1;
      break;
    }
  }

  if (count === 0) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
}