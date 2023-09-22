/*
Binary Search

input: arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], element = 20
output: 1

Analysis
Time Complexity:
O(log2n)

The time complexity of the binary search algorithm is O(log2n).

Space COmplexity = O(1) since we only use variables not an array in our solution space.


*/

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20)); // 1
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100)); // 9
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1)); // -1
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 30)); // 2
