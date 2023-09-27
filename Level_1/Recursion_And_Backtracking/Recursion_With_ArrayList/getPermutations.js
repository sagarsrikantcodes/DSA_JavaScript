/*
Get Permutations

Input:
str = "abc"

Output:
["abc", "acb", "bac", "bca", "cab", "cba"]

Complexity Analysis:
1. Time Complexity = O(N!)
2. SPace COmplexity = O(N!)

Time Complexity:

The function uses a recursive approach to generate permutations.
In the worst case, for a string of length N, the function will make N! recursive calls. This is because there are N! permutations of an N-length string.
Within each recursive call, there is a loop that iterates over the characters of the string, making it a linear operation.
Therefore, the time complexity is O(N * N!). This can be simplified to O(N!) since the N! term dominates the complexity.
Space Complexity:

The space complexity is determined by the memory used for the recursive call stack and the resArr array.
At each level of the recursion, the function stores a copy of the str parameter and the ros string. The maximum depth of the recursion is N.
Each level also has its own resArr array, but the space required for these arrays does not accumulate because they are concatenated before returning.
Therefore, the space complexity is O(N) due to the recursive call stack and the ros string.
In summary, the time complexity of this code is O(N!), and the space complexity is O(N). This is a typical time complexity for generating all permutations of a string using a recursive approach.

*/

function getPermutations(str) {
  // Base Case Condition
  if (str === "") { // 1
    let bres = [];
    bres.push("");
    return bres;
  }

  let resArr = []; // 2

  for (let i = 0; i < str.length; i += 1) { // 3
    let char = str.charAt(i); // 3.1
    let left = str.substring(0, i); // 3.2
    let right = str.substring(i + 1); // 3.3
    let ros = left + right; // 3.4
    let rres = getPermutations(ros); // 3.5
    rres.forEach(val => resArr.push(char + val)); // 3.6
  }

  return resArr; // 4
}

console.log(getPermutations("abc"));