/*
Stock Span
Easy  Prev   Next
1. You are given a number n, representing the size of array a.
2. You are given n numbers, representing the prices of a share on n days.
3. You are required to find the stock span for n days.
4. Stock span is defined as the number of days passed between the current day and the first day before today when price was higher than today.

e.g.
for the array [2 5 9 3 1 12 6 8 7]
span for 2 is 1
span for 5 is 2
span for 9 is 3
span for 3 is 1
span for 1 is 1
span for 12 is 6
span for 6 is 1
span for 8 is 2
span for 7 is 1

Pseusocode for Brute Force Approach:
- Declare and Create an arrayrefvar named res. 
- Iterate through the outer loop of an arr.
  - initialize count to 0.
  - Iterate through the inner loop from j = i until j >= 0. 
    - if arr[j] is less than or equal to arr[i] 
      - Increment count by 1.
    - Else,
      - Assign res[i] to count
      - break out of the inner loop. 
- Return res. 

Complexity Analysis:
- Time Complexity = O(N ^ 2)
- Space Complexity = O(N)

*/
/*
function getStockSpan(arr) {
  let res = new Array(arr.length);
  res[0] = 1;

  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    for (let j = i; j >= 0; j -= 1) {
      if (arr[j] <= arr[i]) {
        count += 1;
      } else {
        break;
      }
    }
    res[i] = count;
  }

  return res;
}
*/

/*
Pseudocode for Optimized Method:

- Create a new stack and initialize the span array's first value, 0.
- Loop through all the elements from index 1 to n.
  - As long as the stack is not empty AND top is less than and equals to the current value keep popping.
  - If the stack now is empty then span[index] will be index+1.
    Else span[index] will have index - (value at the top of the stack).
- Finally push the current index into the stack.
- Return span array.

Analysis:
Time Complexity:
You will have to understand why it is O(n). Let's look at the life cycle of just one element. Every element will be pushed into the stack once. Also, there is just one time that the element will be popped. Because once popped it is lost from the stack. So every element has two events associated with itself. One push and just one pop. Both are constant-time operations. When we do the same for n elements we will have n*O(1) i.e O(n) operations. Hence the time complexity is O(n).

Space Complexity:
We are using an auxiliary stack which in the worst case will be fully filled with n numbers. Can you tell me what that is? Yes, if the numbers are in increasing order. Then there will be nothing to pop, only elements will be pushed.Also, there is an array of the span where we had to store the span results.Hence overall space complexity is O(n).

*/

function getStockSpan(arr) {
  let stack = [];
  let spanArr = new Array(arr.length);
  stack.push(0);
  spanArr[0] = 1;
  for (let i = 1; i < arr.length; i += 1) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      spanArr[i] = i + 1;
    } else {
      spanArr[i] = i - stack[stack.length - 1];
    }

    stack.push(i);
  }

  return spanArr;
}

console.log(getStockSpan([2, 5, 9, 3, 1, 12, 6, 8, 7]));
// [1, 2, 3, 1, 1, 6, 1, 2, 1]
console.log(getStockSpan([1, 2, 3, 1, 2, 1, 3, 5]));
// [1, 2, 3, 1, 2, 1, 7, 8]



