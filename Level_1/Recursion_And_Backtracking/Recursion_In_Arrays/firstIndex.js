/*
First Index In An Array

input: arr = [15, 11, 40, 4, 4, 9], x = 4, idx = 0
output : 3

Pseudo Code
High-Level Thinking:
Establish a faith and then establish a relationship between faith and expectation. Our expectation is that we need to find the first index of occurrence of an element in the array. So we expect that firstIndex(arr,0,data) finds the first index of occurrence of data variable by looking at the complete array and firstIndex(arr,1,data) finds the first index of occurrence of data in the array but it starts looking from 1.
Write Recursive Relation:
We know that we have found the first index of occurrence of data by firstIndex(arr,1,data). Now just compare arr[0] with data and if(arr[0]==data) return 0 else return firstIndex(arr,1,data).
Low-Level Thinking:
Now dry the above code using recursion stack and find out the base case which will come out to be i=array.length-1. Write in the code as well to stop the recursion. Else the call stack will overflow leading to Run Time Error.

Analysis
Time Complexity :
The time complexity of this solution is O(n) as we are traversing an array and searching for an element.

SPACE COMPLEXITY :
As you know from the previous questions, since we did not take any extra memory, the space complexity is O(1), but if we consider stack space then it is O(n).

*/

function firstIndex(arr, idx, x) {
  if (idx === arr.length) {
    return -1;
  }

  if (arr[idx] === x) {
    return idx;
  }

  return firstIndex(arr, idx + 1, x);
}

console.log(firstIndex([15, 11, 40, 4, 4, 9], 0, 4)); // 3
console.log(firstIndex([15, 11, 40, 4, 4, 9], 0, 40)); // 2
console.log(firstIndex([15, 11, 40, 4, 4, 9], 0, 41)); // -1
