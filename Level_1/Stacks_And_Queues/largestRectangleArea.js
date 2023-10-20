/*
84. Largest Rectangle in Histogram
https://leetcode.com/problems/largest-rectangle-in-histogram/

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Test Case-1
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Test Case-2
Input: heights = [2,4]
Output: 4

Constraints:

1 <= heights.length <= 10^5
0 <= heights[i] <= 10^4

Brute Force Algorithm:
- Edge case, If heights.length is equal to 1, then return heights[i]. 
- Initialize width to 1.
- Initialize an areas array to the same length as given heights array.
- Iterate through given array from index, i 0 until length of heights array. 
  - Reassign the width to 1.
  - Iterate through the given array index, j from i - 1 until 0. 
    - If arr[j] >= arr[i], increment the width by 1.
  - Iterate through the given array index, j from i + 1 until heights.length
    - If arr[j] >= arr[i], increment the width by 1. 
  - Assign the value of width * heights[i] to areas[i]. 
- Return the max value of the area of rectangles from areas array. 

Complexity Analysis:
- Time COmplexity = O(N ^ 2)
- Space Complexity = O(N)

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
/*
var largestRectangleArea = function (heights) {
  if (heights.length === 1) {
    return heights[i];
  }

  let areas = new Array(heights.length);

  for (let index = 0; index < heights.length; index += 1) {
    let width = 1;
    for (let j = index - 1; j >= 0; j -= 1) {
      if (heights[j] >= heights[index]) {
        width += 1;
      } else {
        break;
      }
    }

    for (let j = index + 1; j < heights.length; j += 1) {
      if (heights[j] >= heights[index]) {
        width += 1;
      } else {
        break;
      }
    }

    areas[index] = heights[index] * width;
  }

  console.log(areas);
  return Math.max(...areas);
};
*/

/*
Input: An array heights representing the heights of bars in a histogram.

Output: The maximum area of a rectangle that can be formed within the histogram.

Algorithm:

Create an empty stack stack to store indices of bars.

Create an empty array rb of the same size as heights to store the right boundaries of each bar. Initialize rb[heights.length - 1] to heights.length because there are no bars to the right of the last one. Push the index heights.length - 1 onto the stack.

Initialize a loop from i = heights.length - 2 to i = 0, decreasing i by 1 in each iteration.

While the stack is not empty and the height of the bar at the top of the stack (heights[stack[top of stack]]) is greater than or equal to the height of the current bar (heights[i]):
Pop elements from the stack until the top element's height is less than heights[i].
If the stack is not empty:
Set rb[i] to the index at the top of the stack, which represents the right boundary of the current bar.
If the stack is empty:
Set rb[i] to heights.length because there are no bars to the right of the current bar.
Push the current index i onto the stack.
Create an empty stack stack (reset the stack).

Create an empty array lb of the same size as heights to store the left boundaries of each bar. Initialize lb[0] to -1 because there are no bars to the left of the first one. Push the index 0 onto the stack.

Initialize a loop from i = 1 to i = heights.length - 1, increasing i by 1 in each iteration.

While the stack is not empty and the height of the bar at the top of the stack (heights[stack[top of stack]]) is greater than or equal to the height of the current bar (heights[i]):
Pop elements from the stack until the top element's height is less than heights[i].
If the stack is not empty:
Set lb[i] to the index at the top of the stack, which represents the left boundary of the current bar.
If the stack is empty:
Set lb[i] to -1 because there are no bars to the left of the current bar.
Push the current index i onto the stack.
Create an empty array areas of the same size as heights to store the area of the largest rectangle that can be formed using each bar.

Initialize a loop from i = 0 to i = heights.length - 1, increasing i by 1 in each iteration.

Calculate the area for the current bar by using the formula: area[i] = (rb[i] - lb[i] - 1) * heights[i]. This formula calculates the width of the rectangle (distance between the right and left boundaries) and multiplies it by the height of the current bar.
Find the maximum value in the areas array using the Math.max(...areas) function. This value represents the maximum rectangle area in the histogram.

Return the maximum area as the result of the algorithm.

Output: The algorithm returns the maximum area of a rectangle that can be formed within the given histogram.

This algorithm efficiently finds the largest rectangle area in a histogram in O(n) time and O(n) space complexity.

Now, let's analyze the time and space complexity:

Time Complexity:

Calculating right boundaries (first loop) and left boundaries (second loop) each takes O(n), where n is the number of elements in the 'heights' array.
Calculating the area for each bar (third loop) also takes O(n).
Finding the maximum area using Math.max(...areas) is O(n).
Therefore, the overall time complexity of this algorithm is O(n).

Space Complexity:

Two additional arrays, 'rb' and 'lb,' are used, each of size n, resulting in O(n) space complexity.
A stack is used to keep track of indices, which can have up to n elements in the worst case, contributing to an additional O(n) space complexity.
The 'areas' array is also of size n.
The overall space complexity of this algorithm is O(n).





*/

var largestRectangleArea = function (heights) {
  let stack = new Array();
  let rb = new Array(heights.length);
  rb[heights.length - 1] = heights.length;
  stack.push(heights.length - 1);

  for (i = heights.length - 2; i >= 0; i -= 1) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      rb[i] = stack[stack.length - 1];
    } else {
      rb[i] = heights.length;
    }

    stack.push(i);
  }

  console.log(rb);

  stack = new Array();
  let lb = new Array(heights.length);
  lb[0] = -1;
  stack.push(0);

  for (let i = 1; i < heights.length; i += 1) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      lb[i] = stack[stack.length - 1];
    } else {
      lb[i] = -1;
    }

    stack.push(i);
  }

  console.log(lb);

  let areas = new Array(heights.length);

  for (let i = 0; i < heights.length; i += 1) {
    areas[i] = (rb[i] - lb[i] - 1) * heights[i];
  }

  console.log(areas);

  return Math.max(...areas);
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6])); // 12
console.log(largestRectangleArea([4, 2])); // 4