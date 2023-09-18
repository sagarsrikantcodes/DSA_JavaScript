/*
Gcd And Lcm

Problem Discussion :
You are required to print the Greatest Common Divisor (GCD) of two numbers.
You are also required to print the Lowest Common Multiple (LCM) of the same numbers.
Take input "num1" and "num2" as the two numbers.
Print their GCD and LCM.
Explanation:
Dear Readers, let's first try to revise our concepts of Gcd And Lcm.

GCD (Greatest Common Divisor) / HCF (Highest Common Factor)

The greatest common divisor (gcd) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. E.g GCD of 36 and 24 is 12. Because 12 is the highest number that divides both 36 and 24.

LCM (Lowest Common Multiple)

The least common multiple (lcm) of two integers a and b, is the smallest positive integer that is divisible by both a and b. Since the division of integers by zero is undefined, this definition has meaning only if a and b are both greater than 0. E.g LCM of 36 and 24 is 72. Because 72 is the lowest number that is divisible by both 36 and 24.

Approach :
Approach #1 (Brute Force)

Let's say we have the number a and b. Now the brute force approach is that we will loop from the minimum of these two numbers till 1, at any point if the number divides both a and b we can say it is the GCD. If there is no such number greater than 1 then a and b are co-prime and hence we have a GCD = 1.

Let's test your understanding, try to calculate the time complexity and the space complexity of this approach.

Approach #2 (Division Method)

In this method, we make use of the two given numbers by selecting one to be a dividend and the other to be a divisor and perform division. If we get the remainder in the first division (i.e the dividend is not evenly divided by the divisor), we select the remainder to be the next divisor and the previous divisor to be the next dividend and then keep on performing till we find a number which evenly divides the dividend.The first number that performs even division (give remainder 0), is our required gcd.

Above is the division method illustrated for two given numbers 24 and 36. We can see that 12 comes out as the first divisor which performs even division and it is indeed the gcd of these two numbers.

As far as the decision to select the dividend and divisor is, we do not necessarily have to find and put the greater number as dividend and smaller number as the divisor.

We can just put any of the two as either dividend or divisor and the algorithm will further take care of it in the very first step (in case the smaller number is the dividend first).

Above is the division method illustrated for two given numbers 24 and 36. We can see that 12 comes out as the first divisor which performs even division and it is indeed the gcd of these two numbers.

As far as the decision to select the dividend and divisor is, we do not necessarily have to find and put the greater number as dividend and smaller number as the divisor.

We can just put any of the two as either dividend or divisor and the algorithm will further take care of it in the very first step (in case the smaller number is the dividend first).

Moving on to the LCM finding part:

There exists a relation between LCM and GCD

gcd*lcm=n1*n2

This could be further modified into:

lcm= (n1*n2)/gcd

We simply use this formula to get our Least Common Multiple.

But there is a catch. We used n1 and n2 for our calculations directly and therefore, they are modified and not original. To overcome this issue, before the calculation, we store the original values of n1 and n2 in temporary variables to be used later.

Analysis
Time Complexity:
O(min(a, b))

Since we have just one loop from min(a, b) to 1.

Space Complexity:
O(1)

Since no auxiliary space was needed.

This is not a very good optimized approach hence we are avoiding the code for this.

*/

// Code with Implementation 

const readLine = require(`readline-sync`);
const n1 = Number(readLine.question());
const n2 = Number(readLine.question());
let temp1 = n1;
let temp2 = n2;

while (temp1 % temp2 !== 0) {
  let remainder = temp1 % temp2;
  temp1 = temp2;
  temp2 = remainder;
}

let gcd = temp2;
let lcm = Math.floor((temp1 * temp2) / gcd);

console.log(gcd);
console.log(lcm);

