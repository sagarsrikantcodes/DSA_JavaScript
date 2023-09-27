/*
Print Maze Paths With Jumps

We will be given an nxm matrix as in (fig-1) we are given a 5x4 matrix. We are initially at starting position M[1][1]. We have to reach the final position i.e. M[5][4]. For doing that we can take three types of steps

Vertical Steps: We can move down in the column by any number of steps that we want to. For instance, from M[1][1] we may move just a single step to M[2][1] or we may move 2 steps and go directly to M[3][1] or in fact, we may directly move from M[1][1] to M[5][1].
Horizontal Steps: We can move in the forward direction within the same row and we may move by as many steps as we want. For instance, from M[1][1] we may move one step to M[1][2] or two steps to M[1][3] or we may directly jump from M[1][1] to M[1][4].
Diagonal Steps: We can also move along the diagonal and we may take as many steps as we want to. For instance, from M[1][1], we may move to M[2][2] or M[3][3] or even directly to M[4][4].
Remember: This problem is to print all the paths and not to store them. In the "GET" version of the same problem we stored the paths in an Arraylist, but here we just have to print the paths. You may refer to the question video if you have any doubts regarding the question. Try to solve the problem on your own as you already know most of the logic already. Don't worry, we have discussed the complete logic in this article. So, even if you have not solved this problem previously, you are going to understand every bit of it from scratch.

Time Complexity :
The time complexity of the algorithm will depend on 3 recursive calls, one which is made for rows, the second which is made for the columns, and the other which is made for the diagonals.

T(n, m) = T(n, m - 1) [Row call] + T(n - 1, m) [Column call] + T(n - 1, m - 1) [Diagonal call]
T(n, m) <= 3T(n - 1, m)

T(n, m) <= (3 ^ n)T(0, m)

Total time complexity = O(3 ^ (n + m))

SPACE COMPLEXITY :
The space complexity of this procedure is O(1) since we have not used any extra memory or any extra data structure.

*/

function printMazePaths(sr, sc, dr, dc, ans) {
  // Base case condition
  if (sr === dr && sc === dc) { // 1
    console.log(ans);
    return;
  } else if (sr > dr || sc > dc) { // 2
    return;
  }
  // print horizontal moves
  for (let hms = 1; hms <= dc - sc; hms += 1) {
    printMazePaths(sr, sc + hms, dr, dc, ans + "h" + hms);
  }
  // print vertical moves
  for (let vms = 1; vms <= dr - sr; vms += 1) {
    printMazePaths(sr + vms, sc, dr, dc, ans + "v" + vms);
  }
  // print diagonal moves
  for (let dms = 1; dms <= dr - sr && dms <= dc - sc; dms += 1) {
    printMazePaths(sr + dms, sc + dms, dr, dc, ans + "d" + dms);
  }

}

printMazePaths(0, 0, 1, 1, "");
/*

h1v1
v1h1
d1

*/
console.log();
printMazePaths(0, 0, 2, 2, "");
/*

h1h1v1v1
h1h1v2
h1v1h1v1
h1v1v1h1
h1v1d1
h1v2h1
h1d1v1
h2v1v1
h2v2
v1h1h1v1
v1h1v1h1
v1h1d1
v1h2v1
v1v1h1h1
v1v1h2
v1d1h1
v2h1h1
v2h2
d1h1v1
d1v1h1
d1d1
d2

*/