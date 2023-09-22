/*
Subsets Of Array

Problem Discussion:
You are given an array of size n, you have to print all subsets/subsequences of the array in separate lines. This problem is also known as: printing power set of an array. You can consider that the array elements will be distinct.

A subsequence/ subset of an array can be formed by choosing some (may be 0, 1, 2, ... or equal to size of array) elements out of all the possible array elements, in the same order in which they appear in the original array.

Example

For Array = {10, 20, 30}, there will be 2n (= 23) Subsets/Subsequences:

Output:

30
20
20 30
10
10 30
10 20
10 20 30

Algorithm for Main Program :
1. Compute the number of subsets of an array => 2 ^ n
2. Iterate through the index i from 0 until 2 ^ n
  - Convert the index, i to the binaryNumericString of length n. 
  - Iterate through the binaryNumericString of length n.
    - If str[i] is equal to "0" then print ""
    - Else, str[i] is equal to "1" then print arr[i].
  - Print a new line break.

Algorithm to convert the decimal number to binary number:
1. Create and Declare a variable named sum and initialize it to 0.
2. Create and Declare a variable named multipler and initialize it to 1.
3. Run a while loop as long as the number is greater than 0
  - declare and create a variable named digit and assign it to the value n % 2
  - Reassign sum to its current value plus digit * multipler
  - Reassign multipler to multipler * 10
  - Reassign n to n / 2
4. Return the string version of sum to the calling function.

Complexity Analysis:
1. Time Complexity = O(n * (2 ^ n))

2. Space Complexity = O(1)

Time Complexity:
Outer loop is running from 0 to limit = 2n : O(2n)
The inner loop runs for n times: O(n)
Inside the inner loop, we are doing a constant work (reducing temp by 2 and updating resultant string)
Hence the time complexity will be O(2n * n).

SPACE COMPLEXITY:
If we will only print (not store) all the subsets, then only one string is enough, which can be of maximum size as the size of array, hence auxiliary space required will be = O(n).

*/

function decToBin(n) {
  let sum = 0;
  let multipler = 1;

  while (n > 0) {
    let digit = n % 2;
    sum += (digit * multipler);
    multipler *= 10;
    n = Math.floor(n / 2);
  }

  return "0".repeat(3 - String(sum).length) + String(sum);
}

/*
console.log(decToBin(2));
console.log(decToBin(3));
console.log(decToBin(0));
*/

function getSubsetsOfArray(arr) {
  let n = arr.length;
  let len = Math.pow(2, n);

  for (let i = 0; i < len; i += 1) {
    let binaryStr = decToBin(i);
    for (let j = 0; j < binaryStr.length; j += 1) {
      if (binaryStr.charAt(j) === "0") {
        process.stdout.write("");
      } else {
        process.stdout.write(arr[j] + " ");
      }
    }
    console.log();
  }
}

getSubsetsOfArray([10, 20, 30]);

