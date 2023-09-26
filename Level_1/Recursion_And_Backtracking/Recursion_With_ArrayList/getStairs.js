/*
Get Stairs

Algorithm:
Base Case:
If the string length reaches 0, then a new ArrayList bres is created. A blank path is added to it and the list is returned. Here we have 1 way to go from 0th step to 0th step. That way is to keep standing there. This is called the Positive Base Case.
When n<0, it means that there are no stairs left and the person will be going into the basement which isn"t practically possible. Here, we don"t add any path to the ArrayList. This is called the Negative Base Case.
Recursive call on getStairPaths:
We call the function getStairPaths on (n-1) which gives us all the paths from (n- 1) to 0 and we then store them in ArrayList "path1".
Next, we call the function getStairPaths on (n-2) which gives us all the paths from (n- 2) to 0 and which are then stored in ArrayList "path2".
Similarly, the function getStairPaths is called on (n-3) which gives us all the paths from (n- 3) to 0 and which are then stored in ArrayList "path3".
We declare a new ArrayList "paths" which stores all the final paths from n to 0.
Meeting Expectation from Faith:
To every path of ArrayList "path1", "1" is added.
To every path of ArrayList "path2", "2" is added
To every path of ArrayList "path3", "3" is added
The ArrayList containing all the paths from n to 0 is returned.

Time Complexity:

The time complexity of the code is exponential because the function makes three recursive calls for each step.

Let's denote n as the number of steps. In each function call, we make three additional recursive calls with n-1, n-2, and n-3 steps. This branching continues until we reach the base cases (when n becomes 0 or negative).

So, the time complexity is O(3^n), which means the number of recursive calls grows exponentially with the number of steps. This can result in a significant time cost for large values of n.

Space Complexity:

The space complexity is also exponential because of the recursive calls. Each function call creates new arrays (path1, path2, path3, and paths) to store the paths.

In the worst case, when n is large, there will be a large number of function calls on the call stack, each with its own set of arrays. Therefore, the space complexity is also O(3^n), which means it grows exponentially with the number of steps.

Keep in mind that exponential time and space complexity can make the algorithm impractical for large values of n due to its computational cost. However, it works well for small values of n and provides a clear way to generate all possible paths for climbing the staircase.


*/

function getStairPaths(n) {
  if (n === 0) { // 1.1
    let bres = [];
    bres.push("");
    return bres;
  } else if (n < 0) { // 1.2
    let bres = [];
    return bres;
  }

  let path1 = getStairPaths(n - 1);
  let path2 = getStairPaths(n - 2);
  let path3 = getStairPaths(n - 3);

  let paths = [];

  path1.forEach(path => paths.push("1" + path));
  path2.forEach(path => paths.push("2" + path));
  path3.forEach(path => paths.push("3" + path));
  return paths;
}

console.log(getStairPaths(-1)); // []
console.log(getStairPaths(0)); // ['']
console.log(getStairPaths(1)); // ["1"]
console.log(getStairPaths(2)); // ["11", "2"]
console.log(getStairPaths(3)); // [ '111', '12', '21', '3' ]
console.log(getStairPaths(4)); // 
/*
[
  '1111', '112',
  '121',  '13',
  '211',  '22',
  '31'
]

*/
