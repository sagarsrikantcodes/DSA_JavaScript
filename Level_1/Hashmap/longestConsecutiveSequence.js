/*
Longest Consecutive Sequence Of Elements 

1. You are given a number n, representing the size of array a.
2. You are given n numbers, representing elements of array a.
3. You are required to print the longest sequence of consecutive elements in the array (ignoring duplicates).

Note -> In case there are two sequences of equal length (and they are also the longest), then print the one for which the starting point of which occurs first in the array. 

Input Format
A number n
n1
n2
.. n number of elements

Output Format
Elements of longest sequence of consecutive elements of array in separate lines (ignoring duplicates)

Constraints
1 <= n <= 30
0 <= n1, n2, .. n elements <= 15 

Example / Test Cases: 
Test Case - 1
input: arr = [12, 5, 1, 2, 10, 2, 13, 7, 11, 8, 9, 11, 8, 9, 5, 6, 11]
output: [5, 6, 7, 8, 9, 10, 11, 12, 13] 

Data Structures:
input: Array of integers 
output: Array of integers 
Function Execution: Hashset in order to ignore duplicates. 

Algorithm: 
- Declare and Create an empty hashset, set1 and set2. 
- Iterate through the array, arr 
  - Add the unique elements from array, arr to the hashset, set1. 
- Declare and Create an empty array, res. 
- Iterate for number, n from 0 until 15 inclusive (SInce we are given the range of arr[i] from 0 until 15). 
  
  - If n is present in the hashset, set1. Append the value of n to res array.
  - Else, Add res to the set2. Reassign res to an empty array.
- Declare and Create an empty array, resArr. 
- Declare and Create a variable named max and initialize to the minimum possible number. 
- Iterate through the hashset, set2 
  - If the length of the array is greater than max 
    - Reassign max to the length of the array in set2. 
    - Reassign resArr to the array in set2. 
- Return the value of resArr. 

Time Complexity:

Iterating through the input array arr and adding its elements to set1 takes O(n) time, where n is the number of elements in arr.

The for loop from 0 to 15 runs in constant time O(1) because it iterates for a fixed range of values.

The second loop iterates through set2, which contains unique subsequences. The number of unique subsequences in set2 is bounded by the number of unique elements in arr, which is at most 15. Therefore, this loop takes O(15) = O(1) time.

Overall, the time complexity of your code is O(n) because the most significant part of the time complexity is the iteration through the input array.

Space Complexity:

set1 is used to store unique elements from arr. In the worst case, when all elements in arr are unique, the size of set1 can be n (the number of elements in arr). Therefore, the space complexity due to set1 is O(n).

set2 is used to store unique subsequences. The number of unique subsequences in set2 is limited by the number of unique elements in arr, which is at most 15. Therefore, the space complexity due to set2 is O(15) = O(1).

Other variables like res, resArr, max, and the loop variables have constant space requirements, so they don't significantly contribute to the overall space complexity.

Overall, the space complexity of your code is O(n) due to the space used by set1.

*/

function getLongestConsecutiveSequence(arr) {
  const set1 = new Set();
  const set2 = new Set();
  arr.forEach(number => set1.add(number));
  console.log(set1);

  let res = [];
  for (let n = 0; n <= 15; n += 1) {
    if (set1.has(n)) {
      res.push(n);
    } else {
      set2.add(res);
      res = [];
    }
  }

  console.log(set2);

  let resArr = [];
  let max = Number.MIN_VALUE;
  for (let value of set2) {
    if (value.length > max) {
      max = value.length;
      resArr = value;
    }
  }

  return resArr;
}
let arr = [12, 5, 1, 2, 10, 2, 13, 7, 11, 8, 9, 11, 8, 9, 5, 6, 11];
console.log(getLongestConsecutiveSequence(arr)); //  [5, 6, 7, 8, 9, 10, 11, 12, 13] 