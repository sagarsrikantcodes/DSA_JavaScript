/*
Sort 012

input:
arr = [0, 1, 2, 0, 2, 1, 0, 2, 1]

output:
[0, 0, 0, 1, 1, 1, 2, 2, 2]

Algorithm:

1. Maintain three indexes. Initialize first index L as 0 and second index curr as 0, and third index R as n-1.
2. Run the loop until curr becomes equal to R
  If arr[curr] = 1, then increment curr (curr++).
  Else if arr[curr] = 0,
    Swap values at arr[L] and arr[curr]
    Increment both curr and L (curr++, L++).
  Else (arr[curr] = 2),
    Swap values at arr[curr] and arr[R]
    Decrement R only (R--).

Complexity Analysis:
Using three Pointer Technique
1. Time Complexity = O(N + L + R) => O(N)
2. Space Complexity = O(1)


*/

function sort012(arr) {
  let L = 0, R = arr.length - 1, curr = 0;

  while (curr < R) {
    if (arr[curr] === 0) {
      [arr[L], arr[curr]] = [arr[curr], arr[L]];
      curr += 1;
      L += 1;
    } else if (arr[curr] === 1) {
      curr += 1;
    } else if (arr[curr] === 2) {
      [arr[R], arr[curr]] = [arr[curr], arr[R]];
      R -= 1;
    }
  }
}

let arr = [0, 1, 2, 0, 2, 1, 0, 2, 1];
sort012(arr);
console.log(arr); // [0, 0, 0, 1, 1, 1, 2, 2, 2]

