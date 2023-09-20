/*
Digit Frequency

Problem Discussion :
Given a number n, and a digit d, you are required to calculate the frequency of digit d in number n.

Approach :
Deducing Algorithm
So, you know how to extract digits from a given number, right? Please remember how you had printed all digits of a number line-wise in this problem. I request you to try to apply the same logic in this problem yourself before reading further.

I hope that you have tried implementing it. So, since we need to count the number of times d occurs in n, we will make a counter variable. We will keep extracting digits from the number n by repeated division by 10 (until it becomes 0) and check whether the current extracted digit is equal to d or not. If both are equal, then we will increment the counter by 1, otherwise, continue for the next iteration.

Pseudo Code
Set counter = 0
Extract Digits of number n until n becomes 0
If the current digit extracted is the same as the digit d, update counter by 1.
Return counter variable
Seems simple, right? Do give it a try before reading the code.

Analysis
Come on friend, I know you can answer this. Give it a try!

Time Complexity:
O(log10 n)

We are extracting digits of number n which will take O(log10 n) time as there can be maximum floor(log10) digits in a number n.

Space Complexity:
O(1)

We just need to store the count of matched digits in an integer variable counter, hence O(1) auxiliary space is required.

*/

// Code with Implementation 


function getDigitFrequency(n, d) {
  let counter = 0;
  if (n === 0 && d === 0) {
    return 1;
  }

  while (n > 0) {
    let digit = n % 10;
    if (digit === d) {
      counter += 1;
    }
    n = Math.floor(n / 10);
  }

  return counter;
}

const readLine = require(`readline-sync`);
let n = Number(readLine.question());
let d = Number(readLine.question());
let f = getDigitFrequency(n, d);
console.log(f);