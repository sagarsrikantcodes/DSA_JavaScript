/*
Print Stairs

input : n = 3, path = ""
output: output type is void/undefined

111
12
21
3

Complexity Analysis:
1. Time Complexity = O(3 ^ n)
2. Space Complexity = O(N) if we include the recursive call stack.
Elese O(1) can be considered as space complexity 

The printStairPaths function you provided prints all possible paths to climb a staircase with n steps. You can take one, two, or three steps at a time. The function uses recursion to explore and print these paths. Your code looks correct, and the outputs you provided match the expected results. Let's analyze the time and space complexity:

Time Complexity:

The function makes three recursive calls for each step (n-1, n-2, and n-3).
In the worst case, it explores all possible combinations of steps, leading to a time complexity of O(3^n), where n is the number of steps.
This is because, at each step, there are three possibilities (1 step, 2 steps, or 3 steps), and the function explores all combinations.
Space Complexity:

The space complexity is determined by the stack space used for the recursive calls.
The maximum depth of the recursion is equal to n.
Therefore, the space complexity of this code is O(n).
In summary:

Time Complexity: O(3^n)
Space Complexity: O(n)
As you correctly mentioned in your comments, the time complexity is exponential with respect to n. Therefore, for large values of n, the number of recursive calls and the time taken by the function can grow significantly.


*/

function printStairPaths(n, path) {
  // Base case condition
  if (n === 0) {
    console.log(path);
    return;
  } else if (n < 0) {
    return;
  }

  printStairPaths(n - 1, path + "1");
  printStairPaths(n - 2, path + "2");
  printStairPaths(n - 3, path + "3");

}

printStairPaths(3, "");
/*
111
12
21
3
*/

console.log();
printStairPaths(4, "");
/*

1111
112
121
13
211
22
31

*/