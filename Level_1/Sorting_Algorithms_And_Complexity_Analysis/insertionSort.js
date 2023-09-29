/*
Insertion Sort

Pseudo Code

INSERTION-SORT(A, n)
for i = 2 to n
  key = A[i]
  // Insert A[i] into the sorted subarray A[1: i - 1]
  j = i - 1
  while j > 0 and A[j] > key
    A[j + 1] = A[j]
    j -= 1
  A[j + 1] = key

COmplexity Analysis:
1. Time COmplexity = O(N ^ 2)
2. Space Complexity = O(1)

Time Complexity :
O(n2)

We are just making two loops. What do you think will be the worst case for Insertion sort? Yes, when all the numbers are sorted in reverse (in descending order). Then for each iteration of n-1 we will have to perform 1+ 2 + 3 + ... swaps. So in total, this is an Arithmetic Progression whose result is n*(n+1)/2 equivalent to n2.

Worst Case: O(n^2)

Best Case: O(n) [We discussed this previously]

SPACE COMPLEXITY :
O(1)

We are working with constant auxiliary space because the only main operation is a swap.


*/

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < arr.length; i += 1) {
    let key = arr[i];
    // insert arr[i] into sorted subarrat arr[1: i - 1]
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
}

let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6]