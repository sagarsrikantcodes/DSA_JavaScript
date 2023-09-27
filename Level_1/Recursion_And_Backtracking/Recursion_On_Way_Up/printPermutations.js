/*
Print Permutations

input:
str = "abc"

output:
"abc"
"acb"
"bac"
"bca"
"cab"
"cba"

Complexity Analysis:

1. Time Complexity = O(N!) ,Due to the factorial of the length of the string.
2. SPace COmplexity = O(N), DUe to the recursive call stack.

*/

function printPermutations(str, ans) {
  // Base case condition
  if (str === "") {
    console.log(ans);
    return;
  }

  for (let i = 0; i < str.length; i += 1) {
    let char = str.charAt(i);
    let left = str.substring(0, i);
    let right = str.substring(i + 1);
    let ros = left + right;
    printPermutations(ros, ans + char);
  }
}

printPermutations("abc", "");
/*
Outputs:

abc
acb
bac
bca
cab
cba

*/
console.log();
printPermutations("abcd", "");
