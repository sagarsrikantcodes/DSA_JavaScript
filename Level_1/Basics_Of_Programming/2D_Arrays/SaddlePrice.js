/*
Saddle Price

In this article, we are going to solve The problem of saddle price. The saddle price is defined as the least value in the row and the maximum value in the column.

Approach :
1. Iterate through the columns for each row and capture the least values in each row and store it in hashset, set.
2. Iterate through the rows for each column and capture the maximum values in each column and store in res2 array.
3. Iterate through res2 array and check if the element is present in the set. If it is present, return the saddle price to the calling function.

Complexity Analysis:
1. Time Complexity = O(N + M)
2. SPace Complexity = O(N)

*/

function getSaddlePrice(arr) {
  const leastValuesinRows = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    leastValuesinRows.add(Math.min(...arr[i]));
  }

  // console.log(leastValuesinRows);

  let maxValues = [];

  for (let j = 0; j < arr[0].length; j += 1) {
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
      max = Math.max(max, arr[i][j]);
    }
    maxValues.push(max);
  }

  // console.log(maxValues);

  for (let i = 0; i < maxValues.length; i += 1) {
    if (leastValuesinRows.has(maxValues[i])) {
      return maxValues[i];
    }
  }

  return "No Saddle Point Found";
}

console.log(getSaddlePrice([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]])); // 41

