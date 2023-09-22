/*
Span Of An Array

input: arr = [10, 5, 4, 19, 3, 8]
output: 16
Explanation: max = 19 and min = 3, span = max - min => 19 - 3 => 16

Time and Space Complexity Analysis:
Time Complexity:
O(n)

A "for" loop is used to find the minimum and maximum values in the array; travelling the n sized array makes the time complexity O(n).

SPACE COMPLEXITY:
O(1)

Since no extra space is used, therefore space complexity is constant.

*/

let arr = [10, 5, 4, 19, 3, 8];
let max = Math.max(...arr);
let min = Math.min(...arr);
let span = max - min;
console.log(span);