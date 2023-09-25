/*
Print Decreasing

Constraints
1 <= n <= 1000

Sample Input
5

Sample Output
5
4
3
2
1

Analysis
Time Complexity: O(n)
As n calls are made and work is done corresponding to these n calls therefore the time complexity becomes O(n).

Space Complexity: O(1)
Since no extra space is used, therefore space complexity is constant, however you should know that if the recursion call stack is taken into account, then space complexity will be O(n) as there are n recursive calls.

*/

function printDecreasing(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printDecreasing(n - 1);

}

printDecreasing(5);
console.log();
printDecreasing(4);