/*
The Curious Case Of Benjamin Bulbs

Problem Discussion :
You are given n number of bulbs. They are all switched off. A weird fluctuation in voltage hits the circuit n times. In the 1st fluctuation, all bulbs are toggled, in the 2nd fluctuation every 2nd bulb is toggled, in the 3rd fluctuation, every 3rd bulb is toggled, and so on. You've to find which bulbs will be switched on after n fluctuations.
Take as input a number n, representing the number of bulbs.
Print all the bulbs that will be on after the nth fluctuation in voltage.


Input format:
n, an integer

Output format:
b1 b2 b3 b4 .. all bulbs that will be on after nth wave

Constraints:
2 <= n < 10^9

Approach :
Let us start off with an example of 20 given bulbs. Every voltage change will change the state of the bulb, either from on or off, or off from on. Now according to the given problem, after the first fluctuation, all the bulbs will be turned on.

In the second fluctuation, every second bulb will be affected.

For illustration purposes, let us denote the effect of fluctuation with a tick against the 20 given bulbs.

On the first fluctuation, all the bulbs' states will change (on from off). On the second fluctuation, every 2nd bulb, that is, 2 4 6 8 10 12 14 16 18 20 states will be changed (off from on).

On the third fluctuation, every third bulb will be affected by the voltage, that is, 3 6 9 12 15 18 (the bulbs that are on will turn off and bulbs that were off will turn on).

Carrying on this process for 20 fluctuations and maintaining the pattern of ticking off, we end up with the following results.

After 20 fluctuations, we observe that the bulbs that end up being turned on are

1 4 9 16 which experienced an odd number of fluctuations through them. Rest all numbers experienced an even number of fluctuations and hence, they are turned off.

And we can detect a pattern here. All of these bulb numbers are perfect squares.

Now why only these perfect squares were numbers left on, after the whole cycle?

The problem comes down to the question that how many factors does the number have, or comprises of.

If a bulb had an even number of factors, then it would participate in an even number of cycles, thus, it would then keep the bulb off.

If a bulb had an odd number of factors, then it would participate in an odd number of cycles and hence, otherwise would be kept on.

If a bulb had an odd number of factors, then it would participate in an odd number of cycles and hence, otherwise would be kept on.

So, all perfect square numbers have odd numbers of factors.

So, in this problem, we just have to print all the perfect squares up to the user input number.

It was not much of a question, as much as it was a puzzle that required to be decoded.


*/

// Code with Implementation 

const readLine = require(`readline-sync`);
const number = Number(readLine.question());

for (let i = 1; i * i <= number; i += 1) {
  console.log(i * i);
}

// Test Cases
/*

INput: 20
Output:
1
4
9
16

*/