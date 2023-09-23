/*
Spiral Display

input:
arr = 
[[11, 12, 13, 14, 15, 16, 17],
[21, 22, 23, 24, 25, 26, 27],
[31,32,33,34,35,36,37],
[41,42,43,44,45,46,47],
[51,52,53,54,55,56,57]]


Output:
print the output in the spiral display

Analysis
Time Complexity:
O(n^2)

As there is nested for loop and the outer for loop runs n times. There are two inner for loops. Either one will run in each iteration.

Making the time complexity: O(n)*O(m)= O(n*m).

SPACE COMPLEXITY:
O(1)

Since, we are not using any auxiliary space and hence the space complexity is O(1).


*/

function spiralDisplay(arr) {
  let minRow = 0;
  let minCol = 0;
  let maxRow = arr.length - 1;
  let maxCol = arr[0].length - 1;
  let count = 0;
  let totalElements = arr.length * arr[0].length;

  while (count < totalElements) {
    // left wall 
    if (count < totalElements) {
      for (let i = minRow; i <= maxRow; i += 1) {
        process.stdout.write(arr[i][minCol] + " -> ");
        count += 1;
      }
    }
    minCol += 1;

    // Bottom Wall
    if (count < totalElements) {
      for (let i = minCol; i <= maxCol; i += 1) {
        process.stdout.write(arr[maxRow][i] + " -> ");
        count += 1;
      }
    }
    maxRow -= 1;

    // Right Wall
    if (count < totalElements) {
      for (let i = maxRow; i >= minRow; i -= 1) {
        process.stdout.write(arr[i][maxCol] + " -> ");
        count += 1;
      }
    }
    maxCol -= 1;

    // Top Wall
    if (count < totalElements) {
      for (let i = maxCol; i >= minCol; i -= 1) {
        process.stdout.write(arr[minRow][i] + " -> ");
        count += 1;
      }
    }
    minRow += 1;
  }
}

spiralDisplay([[11, 12, 13, 14, 15, 16, 17],
[21, 22, 23, 24, 25, 26, 27],
[31, 32, 33, 34, 35, 36, 37],
[41, 42, 43, 44, 45, 46, 47],
[51, 52, 53, 54, 55, 56, 57]]);

