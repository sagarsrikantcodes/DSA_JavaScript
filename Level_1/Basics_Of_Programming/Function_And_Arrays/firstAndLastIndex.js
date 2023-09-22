/*
First And Last Index

Pseudo Code:

First Index:
Set potential candidate first = -1
Take low = 0, high = size of array - 1. Apply binary search until low <= high
Find mid = (low + high)/2
If arr[mid] < d, then update low = mid + 1
Else if arr[mid] > d, then update high = mid - 1
Else (arr[mid] = d)
Update Potential candidate first = mid
Update high = mid - 1
If first = -1, then no occurrence of d in array, else return first.


First Index:
Set potential candidate last = -1
Take low = 0, high = size of array - 1. Apply binary search until low <= high
Find mid = (low + high)/2
If arr[mid] < d, then update low = mid + 1
Else if arr[mid] > d, then update high = mid - 1
Else (arr[mid] = d)
Update Potential candidate last = mid
Update low = mid + 1
If last = -1, then no occurrence of d in array, else return last.

Analysis
Time Complexity:
We are doing binary search only. Even if we are continuing our binary search after finding an element, it is still reducing the search space by half of the original size. Hence, the time complexity will remain as O(log2 n).

SPACE COMPLEXITY:
O(1) auxiliary space is required to store three integer pointers, low, high and mid.

*/

// Code with Implementation 

function getLastIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let potentialLast = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      potentialLast = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }

  return potentialLast;
}

function getFirstIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let potentialFirst = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      potentialFirst = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }

  return potentialFirst;
}

console.log(getFirstIndex([1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77], 33)); // 5
console.log(getLastIndex([1, 5, 10, 15, 22, 33, 33, 33, 33, 33, 40, 42, 55, 66, 77], 33)); // 9