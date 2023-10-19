// Constructing Stack classn using OOP technique
class Stack {

  // Constructor 
  constructor() {
    this.items = [];
  }
  // Pop Method
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    } else {
      return this.items.pop();
    }
  }

  // Peek Method 
  peek() {
    return this.items[this.items.length - 1];
  }

  // Push Method 
  push(element) {
    this.items.push(element);
  }

  // Size 
  size() {
    return this.items.length;
  }

  // Helper Functions
  // isEmpty Method
  isEmpty() {
    return this.items.length === 0;
  }

  // printStack
  printStack() {
    console.log(this.items);
  }
}

// Next Greater Element To The Right

/*
1. You are given a number n, representing the size of array a.
2. You are given n numbers, representing elements of array a.
3. You are required to "next greater element on the right" for all elements of array
4. Input and output is handled for you.

"Next greater element on the right" of an element x is defined as the first element to right of x having value greater than x.
Note -> If an element does not have any element on it's right side greater than it, consider -1 as it's "next greater element on right"
e.g.
for the array [2 5 9 3 1 12 6 8 7]
Next greater for 2 is 5
Next greater for 5 is 9
Next greater for 9 is 12
Next greater for 3 is 12
Next greater for 1 is 12
Next greater for 12 is -1
Next greater for 6 is 8
Next greater for 8 is -1
Next greater for 7 is -1

Constraints
0 <= n < 10^5
-10^9 <= a[i] <= 10^9
Sample Input
5
5
3
8
-2
7

Sample Output
8
8
-1
7
-1


*/

// Brute Force Method
/*
Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(N)

*/
/*
function nextGreaterElementsRight(arr) {
  let res = new Array(arr.length);
  res[res.length - 1] = -1;

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] > arr[i]) {
        res[i] = arr[j];
        break;
      }
    }

    if (res[i] === undefined) {
      res[i] = -1;
    }
  }

  return res;
}

console.log(nextGreaterElementsRight([5, 3, 8, -2, 7])); // [ 8, 8, -1, 7, -1 ]
console.log(nextGreaterElementsRight([2, 5, 9, 3, 1, 12, 6, 8, 7]));
*/
/*
[5, 9, 12, 12, 12,-1, 8, -1, -1]
*/

// Optimized Method Approach 

/*

Approach :
What?
First of all, let's understand what needs to be done, in order to collect the answer array.

First of all we define an answer array which stores the next greater element at corresponding index to given array, nge[] and a stack st.
We traverse the given array in reverse order and push the last element in the stack. And since there is no right element for the last element, we simply store -1 at the last index of the answer array, nge.
Now moving to the second last element, we check our stack whether the topmost element is smaller or greater than the present element. If it's smaller than the present element then we pop out those elements of the stack until we get an element which is greater than this. And when we get a greater element we store this element corresponding to the present element in nge and push the present element in our stack.
However while popping out smaller elements from our stack, if the stack gets emptied out then we store -1 corresponding to the present element in nge and push the present element in our stack.


*/

function nextGreaterElementsRight(arr) {
  let answer = new Array(arr.length);
  let stack = new Stack();
  answer[answer.length - 1] = -1;
  stack.push(arr[arr.length - 1]);

  for (let idx = arr.length - 2; idx >= 0; idx -= 1) {
    while (stack.size() > 0 && stack.peek() <= arr[idx]) {
      stack.pop();
    }

    if (stack.size() === 0) {
      answer[idx] = -1;
    } else {
      answer[idx] = stack.peek();
    }

    stack.push(arr[idx]);
  }


  return answer;
}

console.log(nextGreaterElementsRight([5, 3, 8, -2, 7])); // [ 8, 8, -1, 7, -1 ]
console.log(nextGreaterElementsRight([2, 5, 9, 3, 1, 12, 6, 8, 7]));

/*
[5, 9, 12, 12, 12,-1, 8, -1, -1]
*/

/*
Optimized Method:

Analysis
Time Complexity :
At first it may seem like a while loop is running inside for loop, making the time complexity O(n^2). But this is not the case, the time complexity of this is O(n) only.

Because the while loop inside for loop doesn't run n times. As we are pushing and popping each element of arr[] only once inside the stack.

SPACE COMPLEXITY :
An array of n size is used, making the space complexity O(n).

*/