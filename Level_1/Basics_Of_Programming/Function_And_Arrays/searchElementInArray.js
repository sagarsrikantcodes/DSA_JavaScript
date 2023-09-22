/*
Search Element In An Array

Test Case 1
Input: arr = [1, 2, 8, 5, 3], d = 8
Output: 2

Test Case 2
INput: arr = [1, 2, 8, 5, 3], d = 9
Output: -1

Time and Space Complexity Analysis:
Time Complexity:
O(n)

A 'for' loop is used to find an equivalent value in the array; travelling the n sized array makes the time complexity O(n).

SPACE COMPLEXITY:
O(1)

Since no extra space is used, therefore space complexity is constant.

*/

function searchElement(arr, d) {
  return arr.indexOf(d);
}

console.log(searchElement([1, 2, 8, 5, 3], 8)); // 2
console.log(searchElement([1, 2, 8, 5, 3], 9)); // -1

