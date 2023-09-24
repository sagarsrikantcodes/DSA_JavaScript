/*
Search in a 2D sorted array

input:
arr = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]

output:
[3, 2]



*/

// Brute Force Algorithm
/*
Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(1)

*/
/*
function searchIn2DArray(arr, target) {

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === target) {
        return [i, j];
      }
    }
  }

  return -1;
}
*/

function searchIn2DArray(arr, target) {
  let n = arr.length;
  let row = 0, col = n - 1;
  while (row < n && col >= 0) {
    if (arr[row][col] === target) {
      return [row, col];
    }

    if (arr[row][col] > target) {
      col -= 1;
    } else {
      row += 1;
    }
  }

  console.log("Not Found");
}

console.log(searchIn2DArray([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]], 43)); // [3, 2]

/*

Time Complexity :
Whereas, the time-complexity drops from O(m*n) to O(m+n).

Space Complexity :
The space-complexity of this approach is constant, O(1).

*/

