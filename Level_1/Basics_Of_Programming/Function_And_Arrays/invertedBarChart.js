/*
Inverted Bar Chart

input: arr = [3, 1, 0, 7, 5]
output:

* *   * *
*     * *
*     * *
      * *
      * *
      * 
      * 

*/

function printInvertedBarChart(arr) {
  let max = Math.max(...arr);
  console.log();

  for (let i = 0; i < max; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i < arr[j]) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }

    console.log();
  }
}

printInvertedBarChart([3, 1, 0, 7, 5]);

