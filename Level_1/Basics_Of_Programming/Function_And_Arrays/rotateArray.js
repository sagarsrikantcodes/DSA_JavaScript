/*
Rotate an Array

input: arr = [1, 2, 3, 4, 5, 6, 7], k = 2
output: arr = [6, 7, 1, 2, 3, 4, 5]

Pseudo Code:
Deciding K Value: If the value of K is positive, K=K%N where N is the length of the input array. If the value of K is negative, K=K%N + N.
Revering Parts of Array: After we have calculated the value of K, reverse the first part of the array i.e. from 0 to N-K-1 and the second part from N-K to N-1 separately.
Reverse the entire Array: Now, reverse the entire array i.e. from 0 to N-1. The array will be rotated according to the value of K.

Analysis
Dear reader, after knowing the complete solution it's always time to think about the time and space complexity of the solution.

Time Complexity:
O(n)

This is because we have to traverse the array and its parts to reverse it. So, the time complexity for reversing the array and its parts will be O(n) + O(n) + O(n)=O(n).

SPACE COMPLEXITY:
O(1)

(as we have not used any extra space)

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

function rotateArray(arr, k) {
  if (Math.abs(k) > arr.length) {
    k = k % arr.length;
  }

  if (k < 0) {
    k = k + arr.length;
  }

  let firstArr = arr.slice(0, arr.length - k);
  let secondArr = arr.slice(arr.length - k);

  reverse(firstArr);
  reverse(secondArr);
  let result = [];
  firstArr.forEach(n => result.push(n));
  secondArr.forEach(n => result.push(n));
  reverse(result);
  return result;
}

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(rotateArray(arr, 2)); // [60, 70, 10, 20, 30, 40, 50]
arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, -103)); // [4, 5, 1, 2, 3]


