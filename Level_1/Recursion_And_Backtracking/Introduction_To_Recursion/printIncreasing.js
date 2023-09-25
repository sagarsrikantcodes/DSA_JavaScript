/*
Print Increasing

INput
n = 5

Output
1
2
3
4
5

Analysis
Time Complexity :
O(n)

As n calls are made and work is done corresponding to these n calls therefore the time complexity becomes O(n).

SPACE COMPLEXITY :
O(1)

Since no extra space is used, therefore space complexity is constant, however you should know that if the recursion call stack is taken into account, then space complexity will be O(n) as there are n recursive calls.

*/

function printIncreasing(n) {
  if (n === 0) {
    return;
  }

  printIncreasing(n - 1);
  console.log(n);
}

printIncreasing(5);