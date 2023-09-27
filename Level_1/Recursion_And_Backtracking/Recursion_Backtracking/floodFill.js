/*
Flood Fill

Certainly! Launch School's PEDAC process (Problem, Examples, Data Structure, Algorithm, Code) is a structured way to approach and solve coding problems. Let's break down the provided code using this process:

1. Problem:

We want to implement the flood-fill algorithm, which is used to traverse a 2D grid (matrix).
Given a matrix (arr), a starting point (sr, sc), and a path (ans), we need to explore all possible paths from the starting point and print them.
The algorithm should avoid obstacles (cells with a value of 1 in the matrix) and should not revisit visited cells.
2. Examples:

The code provides an example using a 6x7 matrix arr and a starting point at (0, 0).
3. Data Structure:

arr: The input matrix, a 2D array representing the grid.
sr and sc: The starting row and column indices.
ans: A string representing the current path being explored.
visited: A 2D boolean array to keep track of visited cells.
4. Algorithm:

The flood-fill algorithm is implemented as a recursive function floodFill.
The base cases are:
If the current position (sr, sc) is out of bounds or has a value of 1 in the arr, or if it's already visited, return.
If the current position is at the bottom-right corner of the grid, print the current path (ans) and return.
Mark the current position as visited in the visited array.
Recursively explore all four possible directions (top, left, down, and right) while updating the ans string accordingly.
After each recursive call, mark the current position as unvisited by setting it to false in the visited array.
5. Code:

The code initializes the input matrix arr, the visited array, and then calls the floodFill function with the starting point (0, 0).
Here's a step-by-step explanation of how the algorithm works:

It starts at the top-left corner of the grid (0, 0) and explores all possible paths while avoiding obstacles and backtracking.
The ans string keeps track of the path taken, and when it reaches the bottom-right corner, it prints the path and returns.
The visited array ensures that each cell is visited only once and prevents infinite recursion.
Overall, the code correctly implements the flood-fill algorithm to explore all possible paths in a 2D grid while avoiding obstacles and backtracking.


Complexity Analysis:
1. Time Complexity = O(4 * N ^ 2) => O(N ^ 2), Since we are traversing 2D Array 4 times for top, left, down and right

2. Space Complexity = O(N ^ 2) , Since we are used extra 2D array for analyzing for the cell is visited or not.

Analysis
Time Complexity :
O(4*n2) which can simply be written as O(n2).

This is because each cell of the matrix is processed at most 4 times. For Example, a particular cell can be called by its top, down, left or right cell.

SPACE COMPLEXITY :
O(n2)

Since an extra 2D array is used for storing "visited" cells therefore the space complexity is quadratic.

The code you provided is an implementation of the flood-fill algorithm to traverse a 2D grid. Here's the complexity analysis:

Time Complexity:

In the worst case, each cell of the matrix is processed at most four times (top, left, down, and right).
The grid has N x M cells, and for each cell, you make recursive calls to its neighbors.
The time complexity is O(N * M), where N is the number of rows and M is the number of columns in the grid.
Space Complexity:

The space complexity is determined by the additional data structures used in the algorithm.
The visited array is created with dimensions N x M, which requires O(N * M) space.
The space used for the recursion stack is at most O(N * M) because, in the worst case, you can have N * M recursive calls.
Therefore, the overall space complexity is O(N * M).
In your specific example, with a 6x7 grid, the time and space complexity would be O(6 * 7) = O(42), which simplifies to O(N * M) in general terms. The space complexity is also O(N * M) due to the visited array and recursion stack.

Your analysis in the code comments is accurate, and the code is correctly implementing the flood-fill algorithm.

*/

function floodFill(arr, sr, sc, ans, visited) {
  // Base case conditions
  if (sr < 0 || sc < 0 || sr === arr.length || sc === arr[0].length || arr[sr][sc] === 1 || visited[sr][sc] === true) { // 1
    return;
  }

  if (sr === arr.length - 1 && sc === arr[0].length - 1) { // 2
    console.log(ans);
    return;
  }

  visited[sr][sc] = true;
  floodFill(arr, sr - 1, sc, ans + "t", visited);
  floodFill(arr, sr, sc - 1, ans + "l", visited);
  floodFill(arr, sr + 1, sc, ans + "d", visited);
  floodFill(arr, sr, sc + 1, ans + "r", visited);
  visited[sr][sc] = false;
}

let arr = [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0]];

let visited = new Array(6);

for (let i = 0; i < visited.length; i += 1) {
  visited[i] = new Array(7);
}

// console.log(visited);

for (let i = 0; i < visited.length; i += 1) {
  for (let j = 0; j < visited[0].length; j += 1) {
    visited[i][j] = false;
  }
}

// console.log(visited);

floodFill(arr, 0, 0, "", visited);
/*
ddrdddrrrrr
ddrrttrrrrddlldddrr
ddrrrrdddrr
*/