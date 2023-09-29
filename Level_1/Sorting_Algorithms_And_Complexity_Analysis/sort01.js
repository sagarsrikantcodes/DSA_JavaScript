/*
Sort 01

INput:
arr = [0, 0, 1, 1, 1, 0, 1]

Output:
arr = [0, 0, 0, 1, 1, 1, 1]

Algorithm:
1. Initialize the pointers L = 0 and R = 0
2. As long as R < arr.length
  - If arr[R] === 0,
    - Swap arr[L] with arr[R]
    - Increment L by 1.
  - Increment R by 1.

Complexity Analysis:
Two Pointer Method
1. Time Complexity = O(L + R)
2. Space COmplexity = O(1)

Analysis
Come on friend, Give it a try!

Time Complexity :
It may seem that the time complexity is more than O(n^2) if you consider two pointers as equivalent to nested loops. But, please analyze carefully.

We are reducing the unexplored segment by one element at each iteration. We either add it to the second or third segment. Hence time complexity is O(n) only.

SPACE COMPLEXITY :
Since we are sorting the binary array in-place, i.e. without taking any extra space, O(1) auxiliary space is required.

Extra Gyaan (Knowledge):
This question can be asked in many ways, by changing 0 and 1 like:

Segregate positive integers from negative integers.
Segregate odd integers from even integers
Segregate red color from blue color.
Sort array of Xs and Ys.
And so on, but the gist of the algorithm is the same, i.e. partition the array in 3 segments and solve using the concept of 2 pointers.

*/

function sort01(arr) {
  let L = 0, R = 0;

  while (R < arr.length) {
    if (arr[R] === 0) {
      [arr[L], arr[R]] = [arr[R], arr[L]];
      L += 1;
    }
    R += 1;
  }
}

let arr = [0, 0, 1, 1, 1, 0, 1];
sort01(arr);
console.log(arr);