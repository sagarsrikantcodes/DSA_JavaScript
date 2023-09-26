/*
Get Maze Paths

Input:
3
3

Output:
[hhvv, hvhv, hvvh, vhhv, vhvh, vvhh]

Algorithm:

Base Case:
If the source row and column reach the destination row and column, then a new ArrayList bres is created. A blank path is added to it and the list is returned. Here we have 1 way to move because if we are already at the destination cell and have to move to the destination cell, we just keep on standing.
We create 2 ArrayLists "hpaths" and "vpaths" to store the list of paths that are in the horizontal and vertical directions respectively.
We check if we are still in the grid by checking whether the row and the column of the source are less than the row and column of the destination .
If the condition is true, we call the function getMazePaths recursively for source row+1 and column+1 which gives us all the paths from that position to the destination.
We declare a new ArrayList "paths" which stores all the final paths from the source cell to the destination cell.
To every path in hpaths, "h" is added.
Similarly, to every path in vpaths, "v" is added.
The ArrayList "paths" containing all the paths from source to destination are returned.

Analysis
Time Complexity :
O(2 ^ n)

This time complexity is exponential because for each state, 2 recursion calls are made.

SPACE COMPLEXITY :
O(1)

As no extra space is required, therefore space complexity is constant. However, if we include the space used in the recursive stack then the space complexity is O(n).

*/

function getMazePaths(sr, sc, dr, dc) {
  if (sr === dr && sc === dc) {
    let bres = [];
    bres.push("");
    return bres;
  }

  let hpaths = [];
  let vpaths = [];

  if (sc < dc) {
    hpaths = getMazePaths(sr, sc + 1, dr, dc);
  }

  if (sr < dr) {
    vpaths = getMazePaths(sr + 1, sc, dr, dc);
  }

  let paths = [];

  hpaths.forEach(hpath => paths.push("h" + hpath));
  vpaths.forEach(vpath => paths.push("v" + vpath));
  return paths;
}

console.log(getMazePaths(0, 0, 2, 2)); // [ 'hhvv', 'hvhv', 'hvvh', 'vhhv', 'vhvh', 'vvhh' ]

/*
  // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    public static ArrayList<String> getMazePaths(int sr, int sc, int dr, int dc) {
        return null;
    }

*/