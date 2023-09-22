/*
Bar Chart

input: arr = [3, 1, 0, 7, 5]
output:

      *
      *
      * *
      * *
*     * *
*     * *
* *   * *


*/

let arr = [3, 1, 0, 7, 5];
let max = Math.max(...arr);

for (let i = 0; i < max; i += 1) {
  for (let j = 0; j < arr.length; j += 1) {
    if (i >= max - arr[j]) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log(); // print new line break
}