/*
Primes Till N

Understanding the Problem:
You have to print all prime numbers between a range.

Take as input "low", the lower limit of range.

Take as input "high", the higher limit of range.

For the range print all the primes numbers between low and high (both included).



Input format
low
high
Output format
n1
n2
.. all primes between low and high (both included)

Constraints
2 <= low < high < 10 ^ 6

Approach:
In simple primality tests, we try and find a divisor for a given number till sqrt(number) .

If we find success in finding a divisor, we adjudge the number to be non-prime in nature, otherwise prime.

Also, as soon as we find a divisor for the number, we stop our search for further divisors (which is futile in logic) and do not display the non-prime number.

However, upon failure to find any such divisor, we will print that number as it is a prime number.

We start of by taking input in the form of a low number (lower bound of range) and a high number (upper bound of number).

We have to print all the prime numbers in this desired range.

Now to create the filter for prime numbers, we initialize a count variable, and start dividing the current number in range with divisor starting from 2 (squared value div*div) up to n.

If we successfully divide n evenly with any divisor, we increment the count and break the loop, moving forward to the conditional statement placed above the printing command, which will be that the count should be equal to 0.

*/

// Code with Implementation 

const readLine = require(`readline-sync`);
let low = Number(readLine.question());
let high = Number(readLine.question());

for (let n = low; n <= high; n += 1) {
  let count = 0;
  for (let div = 2; div * div <= n; div += 1) {
    if (n % div === 0) {
      count += 1;
      break;
    }
  }

  if (count === 0) {
    console.log(n);
  }
}