/*
Print ZigZag

Input1 : 1
Output1: 1 1 1

Input2: 2
Output2: 2 1 1 1 2 1 1 1 2

Inputn : n
Outputn: n f(n - 1) n f(n - 1) n

Here's the time and space complexity analysis of the code:

Time Complexity:

The function printZigZag(n) is recursive and calls itself twice for each value from n down to 1 and then back up to n.
The time complexity can be expressed as O(2^n), where "n" is the input value. This is because, for each level of recursion, the function branches into two recursive calls, creating an exponential growth in the number of function calls with respect to the input.
Space Complexity:

The space complexity is determined by the maximum depth of the call stack during recursion.
In this case, since there are two recursive calls for each level of recursion, the maximum depth of the call stack is proportional to "n".
Therefore, the space complexity is O(n), where "n" is the input value.
In summary, the code has exponential time complexity and linear space complexity with respect to the input value "n." The time complexity grows rapidly as "n" increases, making it inefficient for large values of "n."

*/

function printZigZag(n) {
  if (n === 1) {
    for (let i = 0; i < 3; i += 1) {
      process.stdout.write(n + " ");
    }
    return;
  }

  process.stdout.write(n + " ");
  printZigZag(n - 1);
  process.stdout.write(n + " ");
  printZigZag(n - 1);
  process.stdout.write(n + " ");

}

printZigZag(3); // 3 2 1 1 1 2 1 1 1 2 3 2 1 1 1 2 1 1 1 2 3 
console.log();
printZigZag(2); // 2 1 1 1 2 1 1 1 2

