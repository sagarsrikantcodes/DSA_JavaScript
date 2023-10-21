/*
239. Sliding Window Maximum
https://leetcode.com/problems/sliding-window-maximum/

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

/*
Brute Force Method 
- Declare and Create the res array. 
- Iterate through the array in the outer loop from index, i 0 until nums.length 
  - Declare and initialize max to minimum passible integer value. 
  - Iterate through the array in the inner loop from index, j (i until i + k). 
    - Check if (i + k) < nums.length + 1
      - Reassign max to maximum value between max and arr[j]. 
  - Push the max value to the res array. 
- Return the res array.

Complexity Analysis:
- Time Complexity = O(N ^ 2)
- Space Complexity = O(N)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
var maxSlidingWindow = function (nums, k) {
  if (k = 1) {
    return nums;

  }

  let res = [];

  for (let i = 0; i < nums.length; i += 1) {
    let max = -10000;
    // console.log(`i is ${i}`);
    if (i + k < nums.length + 1) {
      for (let j = i; j < i + k; j += 1) {
        // console.log(`j is ${j}`);
        max = Math.max(max, nums[j]);
      }
      res.push(max);
    }
  }

  return res;
};
*/

/*
Algorithm:

Create an array indicesOfNextGreaterElements to store the indices of the next greater elements for each element in the nums array.
Create a stack st to maintain indices in decreasing order of values.
Initialize the stack by pushing the last index nums.length - 1 onto the stack and set indicesOfNextGreaterElements[nums.length - 1] to nums.length (there are no greater elements to the right of the last element).
Iterate through the elements of the nums array from right to left using the index i.
While the stack is not empty and the value of the current element nums[i] is greater than or equal to the value at the top of the stack (nums[st[st.length - 1]]), pop elements from the stack.
If the stack is empty, set indicesOfNextGreaterElements[i] to nums.length (there are no greater elements to the right of the current element).
If the stack is not empty, set indicesOfNextGreaterElements[i] to the index at the top of the stack (st[st.length - 1]).
Push the current index i onto the stack.
Create an index i and an empty array res to store the maximum values for each sliding window.
Iterate through the possible starting positions of the sliding window, denoted by the index w from 0 to nums.length - k, where k is the sliding window size.
If i is less than w, update i to w to ensure it is within the current window.
While indicesOfNextGreaterElements[i] is less than w + k, update i to indicesOfNextGreaterElements[i] (move i to the index of the next greater element within the window).
Append the element at index i to the res array, which represents the maximum for the current window.
Complexity Analysis:

Time Complexity: The time complexity of this algorithm is O(n), where 'n' is the length of the nums array. The two passes (one for creating indicesOfNextGreaterElements and one for sliding the window) contribute to the linear time complexity.

Space Complexity: The space complexity is O(n), where 'n' is the length of the nums array. This space is used for the indicesOfNextGreaterElements array and the stack st, both of which can have at most 'n' elements.

Your code efficiently finds the maximum values in sliding windows with a time complexity of O(n) and is a valid solution for the problem. It effectively uses the stack to determine the indices of next greater elements, allowing for efficient sliding window calculations.

*/

var maxSlidingWindow = function (nums, k) {
  let indicesOfNextGreaterElements = new Array(nums.length);
  let st = new Array();
  st.push(nums.length - 1);
  indicesOfNextGreaterElements[nums.length - 1] = nums.length;

  for (let i = nums.length - 2; i >= 0; i -= 1) {
    while (st.length > 0 && nums[i] >= nums[st[st.length - 1]]) {
      st.pop();
    }

    if (st.length === 0) {
      indicesOfNextGreaterElements[i] = nums.length;
    } else {
      indicesOfNextGreaterElements[i] = st[st.length - 1];
    }

    st.push(i);
  }

  console.log(indicesOfNextGreaterElements);

  let i = 0;
  let res = [];

  for (let w = 0; w <= nums.length - k; w += 1) {
    console.log("i is " + i);
    console.log("w is " + w);
    if (i < w) {
      i = w;
    }

    while (indicesOfNextGreaterElements[i] < w + k) {
      i = indicesOfNextGreaterElements[i];
    }
    res.push(nums[i]);
    console.log(res);
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([1, -1], 1)); // 

