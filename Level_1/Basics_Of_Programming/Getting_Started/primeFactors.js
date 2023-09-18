/*
Prime Factorization Of A Number

Problem Discussion :
You are required to display the prime factorization of a number.
Take as input a number n.
Print all its prime factors from smallest to largest.

Explanation:
Dear Readers, let's first revise what integer factorization is:-

In number theory, integer factorization is the decomposition of a composite number into a product of smaller integers. If these factors are further restricted to prime numbers, the process is called prime factorization.

Approach :
We divide the given number by the smallest number and keep on dividing till it no longer could be divided by that number.

As soon as that happens, we check the divisibility of the current state of the given number with the next greater number as the divisor and continue this process until the given number becomes 1.

Basically, "We are dividing the number till it could be divided (Decomposing the number into smaller numbers)".

For instance, taking prime factorization of 1440:

The prime factors are 2, 2, 2, 2, 2, 3, and 5.

But we can further optimize this code as we know from finding prime numbers, that we do not need to iterate the loop till n. Rather, iterating till sqrt(n) or conditioning div2

It is not possible for p > sqrt(n) and q > sqrt(n) at the same time, and we make use of this fact.

Modifying the earlier code accordingly, we optimize the time complexity.

However, there still exists a drawback to this optimization.

What if a factor lies beyond the sqrt(n) range?

Well, the answer to this query is that, yes there can be a factor beyond sqrt(n) but there exists only "One" factor beyond this range.

Take the example of 46:

After the first division with 2, we are left with 23, which is quite clearly out of the range of sqrt(n).

But it is also the only factor that remains. So, we can conclude that after the division process is over and the initially given number to us does not become zero, the current state of the number will be our last prime factor.

With this last modification to our code, we handle all the cases for this problem.


*/

// Code with Implementation 

const readLine = require(`readline-sync`);
let number = Number(readLine.question());

for (let div = 2; div * div <= number; div += 1) {
  while (number % div === 0) {
    console.log(div);
    number = Math.floor(number / div);
  }
}

if (number !== 1) {
  console.log(number);
}

