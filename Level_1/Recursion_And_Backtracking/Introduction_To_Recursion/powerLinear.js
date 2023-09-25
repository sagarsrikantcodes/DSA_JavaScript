/*
Power Linear

Input:
2 ^ 5

Output:
32

Analysis
Time Complexity :
O(n)

Since you are recursively calling for a subproblem with n-1 from n, hence n + 1 recursive calls will be made (+ 1 when it hits the base case n = 0). You can also count the number of recursive calls in the call stack. So the time complexity turns out to be O(n) (which is independent of the value of x).

SPACE COMPLEXITY :
O(1)

There is no data structure used, thus no auxiliary space is used. Hence, space complexity is O(1).

Note: There are n recursive calls that do take stack space, but we do not account for this space as we are only concerned with space used by data structures defined by us.

However, if it is mentioned to give the space complexity which takes into account the space taken by recursion call stack also, then, since there are n recursive calls, hence O(n) space will be required.

*/

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
}

console.log(power(2, 5)); // 32
console.log(power(2, 4)); // 16