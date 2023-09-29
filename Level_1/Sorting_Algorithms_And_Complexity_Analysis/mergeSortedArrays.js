/*
Merge Two Sorted Arrays

input:
left = [2, 4, 6, 7]
right = [1, 2, 3, 5]

output:
[1, 2, 2, 3, 4, 5, 6, 7]

Analysis
Time Complexity :
O(n)

Time complexity will be O(n) where n = a.length + b.length because if we look at i it will move from 0 to a.length only once. And j will move from 0 to b.length only once. So total iterations is a.length + b.length. If you are still not impressed, look at k. k will loop throughout the result array only once. Hence from here also we can say that the time complexity will be a.length + b.length i.e linear O(n).

SPACE COMPLEXITY :
O(n)

Here we are actually using a temporary array of size a.length + b.length to store the merged array. So our space complexity is O(n) i.e Linear.


*/

function merge(left, right) {
  let arr = [];

  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i]);
      i += 1;
    } else {
      arr.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    arr.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    arr.push(right[j]);
    j += 1;
  }

  return arr;
}

let left = [2, 4, 6, 7];
let right = [1, 2, 3, 5];
console.log(merge(left, right)); // [ 1, 2, 2, 3, 4, 5, 6, 7]
console.log();
left = [2, 5, 12, 18, 20];
right = [7, 9, 11, 15, 25, 28, 30, 35];
console.log(merge(left, right));



