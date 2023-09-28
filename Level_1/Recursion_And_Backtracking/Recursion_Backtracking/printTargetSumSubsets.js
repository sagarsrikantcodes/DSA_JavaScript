/*
Print Target Sum Subsets

input:
arr = [10, 20, 30, 40, 50]
tar = 60
idx = 0
set = ""

output:
10, 20, 30,
10, 50,
20, 40,

Algorithm:
We pass the following arguments as parameters to the given function "PrintTarget SumSubsets" : given input array, the index we are at i.e. 0 , initial empty subset, sum of that subset and the target .
BASE CASE: We check whether the index is equal to array of length because it would tell us whether all the elements have been used up or not.
*NOTE: Here we check condition for arr.length and not arr.length-1 even though the indices start with 0 because when the recursive function is called on the last element it increases the index by 1 for the index arr.length-1 and hence the value stored in "idx" is equal to the arr.length.
We call a recursive function for the YES part of the element. Here, that element gets added to the subset string and arithmetically added to "sos".
Next, we call a recursive function for the NO part of that element. Here, that element does not get added to either the subset string or the "sos".

Analysis
Time Complexity :
O(2n)

This time complexity is exponential because for each state, 2 recursion calls are made.

SPACE COMPLEXITY :
O(1)

As no extra space is required, therefore space complexity is constant. However, if we include the space used in the recursive stack then the space complexity is O(n).

*/

// set is the subset
// sos is sum of subset
// tar is target

function printTargetSumSubsets(arr, idx, set, sos, tar) {
  // base case condition
  if (idx === arr.length) {
    if (sos === tar) {
      console.log(set);
    }
    return;
  }

  printTargetSumSubsets(arr, idx + 1, set + arr[idx] + ", ", sos + arr[idx], tar);
  printTargetSumSubsets(arr, idx + 1, set, sos, tar);
}

printTargetSumSubsets([10, 20, 30, 40, 50], 0, "", 0, 60);
/*
10, 20, 30,
10, 50,
20, 40,
*/