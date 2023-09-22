/*
Reverse Array

input: arr = [10, 20, 30, 40, 50, 60, 70]
output: [70, 60, 50, 40, 30, 20, 10]

Analysis
What is the Time and Space Complexity of this method?

Time Complexity :
O(n) since we have traversed the entire array once.

SPACE COMPLEXITY :
O(1) since we have not used any extra language.

*/

function swap(arr, start, end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
}

function reverse(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    swap(arr, low, high);
    low += 1;
    high -= 1;
  }
}

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(reverse(arr));
console.log(arr);