/*

Pattern 1

Approach :
Let us first understand what the given problem demands from the given output format. It shows that:

We only have to print stars (*) in the given problem.
We have to print the "n" input number of rows.
Additionally, we need to print the same number of stars in a row as the row number itself.
Each star on the multiple star lines has a "tab" of space between them (A tab is combination of 4 spaces).
We have to take care of all these parameters while figuring a solution for the given problem. Furthermore, it could be felt "intuitively" that this workload seems repetitive in nature. And where repetition is involved, we bring loops in to the play.

Analysis
For a final analysis of the code:
Remember, the outer loop is responsible for the number of rows that going to be printed and the number of stars to be printed in a row.

The inner loop is responsible for the printing of the number of stars in a row in the correct manner (space adjustments included). Then control is returned to outer loop which changes the line for further printing of the inner loop, repeating for the required number of times.

*/

// Code wih Implementation 

const readLine = require(`readline-sync`);
let n = Number(readLine.question());

for (let i = 1; i <= n; i += 1) {
  console.log("* ".repeat(i));
  console.log();
}