/*
Pythagorean Triplet

Problem Discussion :
You are required to check if a given set of numbers is a valid Pythagorean triplet.
Take as input three numbers a, b and c.
Print true if they can form a Pythagorean triplet and false otherwise.
A Pythagorean triplet consists of three positive integers a, b, and c, such that a2 + b2 = c2. A triangle whose sides form a Pythagorean triple is called a Pythagorean triangle and is necessarily a right triangle.

Before moving onto the solution, please try to solve the problem yourself, then take hints from the solution, and write code by yourself. At last, refer to the solution we have provided to know different approaches/techniques.

Approach :
Deducing Algorithm
There is a fairly straightforward problem. We have to deduce whether the given numbers can form a right-angled triangle or not (Pythagorean triplet).

We find the greatest number out of the three numbers.

We sum the squared values of the smaller values and try equating them with the squared value of the greatest value.

If this equation is valid, then the given numbers are a Pythagorean triplet and we print "true", Else we print "false".

Analysis
Can you guess the time complexity and the space complexity of the above solution?

Time Complexity:
Finding a maximum of 3 numbers, finding whether a2 + b2 = c2 or not, all are constant work, hence time complexity will be O(1).

Space Complexity:
We are not using any data structure, hence it is taking constant space. Thus space complexity will be O(1).

*/

// Code with Implementation

const readLine = require(`readline-sync`);
const a = Number(readLine.question());
const b = Number(readLine.question());
const c = Number(readLine.question());

let max = a;
if (b >= max) {
  max = b;
}

if (c >= max) {
  max = c;
}

if (max === a) {
  console.log((b * b) + (c * c) === (a * a));
} else if (max === b) {
  console.log((a * a) + (c * c) === (b * b));
} else {
  console.log((a * a) + (b * b) === (c * c));
}