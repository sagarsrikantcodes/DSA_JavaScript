/*
max of an array

Pseudo Code
High-Level Thinking:
Establish the relationship between expectation and faith. We expect that we have to find the max(arr,0) meaning the largest element of the array starting from position 0. Our faith will be that we can find the max(arr,1) i.e. the maximum of the remaining part of the array i.e. from index 1 to array.size()-1.
Write Recursive Relation:
Since we know our expectation and faith we can now, very easily compare the arr[0] with the max(arr,1) i.e if arr[0]>max(arr,1), arr[0] will be the max otherwise max(arr,1) will be the max.
Low-Level Thinking:
Now we will try to dry run the recursive code and see the levels inside the call stack, then we will try to find out the base case for the recursion i.e. if we reach a state when only one element is present in the array then it will be the max. So max(arr,arr.length-1) is the final call and i=arr.length-1 is the base case.

Analysis
Time Complexity :
The time complexity of the above solution is O(n). This is because we have iterated the array twice. Once while going into the recursion and the other time while coming out of it. So, n elements were visited twice: n+n= 2n, O(2n)=O(n).

SPACE COMPLEXITY :
The space complexity will be O(1) as we have not used any extra space. If we consider the recursion space, it will be O(n) i.e. the maximum height of the recursion stack.

*/

function maxOfArray(arr, index) {
  if (index === arr.length) {
    return Number.MIN_VALUE;
  }

  return Math.max(arr[index], maxOfArray(arr, index + 1));
}

console.log(maxOfArray([15, 30, 40, 4, 11, 9], 0));  // 40
console.log(maxOfArray([3, 1, 0, 7, 5], 0)); // 7