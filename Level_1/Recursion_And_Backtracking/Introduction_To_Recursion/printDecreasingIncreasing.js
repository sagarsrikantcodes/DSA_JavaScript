/*
Print Decreasing and Increasing

Input:
n = 4

Output:

4
3
2
1
1
2
3
4

Time Complexity :
O(n)

This time complexity is linear because a recursion call is made.

SPACE COMPLEXITY :
O(1)

As no extra space is required, therefore space complexity is constant. However, if we include the space used in the recursive stack then the space complexity is O(n).

*/

function printDecreasingIncreasing(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printDecreasingIncreasing(n - 1);
  console.log(n);
}

printDecreasingIncreasing(4);
console.log();
printDecreasingIncreasing(5);