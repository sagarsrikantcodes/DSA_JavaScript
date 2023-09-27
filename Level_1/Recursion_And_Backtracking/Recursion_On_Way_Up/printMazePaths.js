/*
Print Maze Paths


Complexity ANalysis:

Time Complexity:

In each recursive call, the function explores two possibilities: moving horizontally (sc < dc) and moving vertically (sr < dr).
The function recursively explores these possibilities until it reaches the destination (dr, dc) or goes beyond it.
In the worst case, the function explores all possible paths from (sr, sc) to (dr, dc).
Therefore, the time complexity of this code is O(2^(dr + dc)), where dr and dc are the destination row and column, respectively.
Space Complexity:

The space complexity is determined by the stack space used for the recursive calls.
The maximum depth of the recursion is equal to dr + dc because at each step, you either move horizontally or vertically.
Therefore, the space complexity of this code is O(dr + dc).
In summary:

Time Complexity: O(2^(dr + dc))
Space Complexity: O(dr + dc)
The time complexity is exponential with respect to the sum of the destination row and column, so for large values of dr and dc, the number of recursive calls and time taken by the function can grow significantly.



*/

function printMazePaths(sr, sc, dr, dc, ans) {
  if (sr === dr && sc === dc) { // 1
    console.log(ans);
    return;
  } else if (sr > dr || sc > dc) { // 2
    return;
  }

  // Print Horizontal Paths
  if (sc < dc) { // 3
    printMazePaths(sr, sc + 1, dr, dc, ans + "h");
  }
  // Print Vertical Paths
  if (sr < dr) { // 4
    printMazePaths(sr + 1, sc, dr, dc, ans + "v");
  }
}

printMazePaths(0, 0, 1, 1, "");
console.log();
printMazePaths(0, 0, 2, 2, "");
/*

hhvv
hvhv
hvvh
vhhv
vhvh
vvhh


*/


/*
// sr - source row
      // sc - source column
      // dr - destination row
      // dc - destination column
      public static void printMazePaths(int sr, int sc, int dr, int dc, String psf) {
          
      }




*/