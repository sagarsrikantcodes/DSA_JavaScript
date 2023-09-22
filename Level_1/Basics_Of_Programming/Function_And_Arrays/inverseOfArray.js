/*

Inverse Of an Array

input: arr = [3, 4, 1, 2, 0]
output: [4, 2, 3, 0, 1]

Algorithm:
0. Declare and Create a new array of similar length as arr using new operator.
1. Iterate through the given array using index, i from 0 until arr.length 
  - Assign the value of res[arr[i]] to index, i.
2. Return the resArr to the calling function.

Pseudo Code:
Let's now understand the programming aspect of this problem which is very simple.

Looking at the signature of the function, we can imply that we need to return an array, as the function that we have to complete is of type array of integers.

For that, first of all you need to construct a new array of length equal to length of input array.
Then, run a loop on the input array, initialized with i= 0.
Now, first capture the value present at ith index of the array, arr in variable val. This val now represents an index for an inverse array where i needs to be stored as data.
After that store the value i at the (val)th index of array inverse (inv).
Finally return the new array as the desired result.

Analysis
Time Complexity:
O(n)

A "for" loop is used to put the index value as data in a new array from the input array; travelling the n sized array makes the time complexity O(n).

SPACE COMPLEXITY:
O(n)

As a new array (inv) of size n has been used, therefore space complexity becomes O(n).

*/

function inverseOfArray(arr) {
  let resArr = new Array(arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    resArr[arr[i]] = i;
  }

  return resArr;
}

console.log(inverseOfArray([3, 4, 1, 2, 0])); // [4, 2, 3, 0, 1]