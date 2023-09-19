/*
Pattern 2

In the given problem, we need 'n' number of stars in first row and one less in preceding rows.
Let's analyze a familiar code:

img
This "magic" loop will print the
number of stars equal to the value of i.
That is, if i = 2, there will be 2
iterations and 2 stars will be printed, one in each iteration.
We need to have "faith" that the value of 'i' that will be provided to this loop, it will print that many stars for us.
Now since this resolves the printing of stars part of our problem, we put our focus on to the spacing of these stars aspect of the problem.
Given to us in the output format, we see that the problem expects us to print the stars in different 'n' lines each containing 'n' number of stars will n reduced in each preceding line by 1.
Furthermore, between each star, it requires us to put a tab space ( 4 spaces together), which is solved in the "magic" loop itself.
Now we work on giving the magic loop (which will be our inner loop), the values of 'i' through an outer loop, which provides the iteration conditions for the inner loop.

The inner loop prints the number of stars in a row with proper spacing, but the outer loop provides the termination condition of inner loop as the number of stars required on the particular line.
For the above example, we take n = 5 and then dry run the process we require.
Programming for the same will be done as follows:
The illustration below showcases the inner loop, and the spacing of each star.

Writing the outer loop and thus concluding the programming implementation:

Abstraction is a very important concept used as for understanding how we approach the solution. We wrote the inner loop first, defining its functioning and having complete faith that it will work without failure. Then we nest it inside an outer loop, which uses it according to convenience, having faith that upon giving an input to inner loop, the inner loop will always produce the correct output.
It is this layered programming methodology, which helped us solve this problem, and this modeling of solution for implementation in programming language is known as Abstraction.

*/

// Code with Implementation 

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

let nstars = n;
for (let i = 1; i <= n; i += 1) {
  console.log("*\t".repeat(nstars));
  nstars -= 1;
  console.log();
}