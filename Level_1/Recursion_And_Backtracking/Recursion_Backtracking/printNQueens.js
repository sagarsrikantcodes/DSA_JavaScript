/*
N Queens

The code you provided is a JavaScript implementation of solving the N Queens Problem using a backtracking algorithm. Let's break down the code and understand how it works:

isQueenSafe(chess, row, col): This function checks whether it's safe to place a queen at a given position (row, col) on the chessboard represented by the chess matrix. It checks three conditions:

It looks for any queens in the same column (above the current row).
It checks the left diagonal for queens.
It checks the right diagonal for queens.
If any of these conditions are met (i.e., a queen is already present in one of these positions), the function returns false, indicating that it's not safe to place a queen at (row, col); otherwise, it returns true.
printNQueens(chess, ans, row): This is a recursive function that tries to place queens on the chessboard. It starts from the first row (row = 0) and iterates through each column in that row. For each column, it checks if it's safe to place a queen using the isQueenSafe function.

If it's safe to place a queen in the current position (row, col), it marks that position as 1 in the chess matrix, appends the position to the ans string, and proceeds to the next row (row + 1).
If it's not safe to place a queen, it backtracks by setting the position back to 0 in the chess matrix and continues to check the next column in the current row.
When it reaches the last row (row === chess.length), it means a valid placement of queens has been found, and it prints the ans string, which represents the positions of queens.
let chess = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];: This initializes the chess matrix as a 4x4 matrix, initially filled with zeros. You can change the size of the chessboard by modifying the size of this matrix.

printNQueens(chess, "", 0);: This is the starting point of the program. It calls the printNQueens function with an empty ans string and row set to 0 to start the process of finding valid queen placements.

The program will recursively explore different combinations of queen placements, printing the valid solutions as it finds them.

The example provided in the comment at the end of the code shows two possible solutions for the 4x4 chessboard, each represented as a string of queen positions.

The time complexity of this algorithm is O(N!), where N is the size of the chessboard (the number of rows and columns). This is because it explores many possible combinations of queen placements, and the number of recursive calls grows exponentially with the size of the board.

The space complexity is O(N^2) because of the chess matrix used to represent the chessboard, and the space required for the recursive call stack during the backtracking process.

Time Complexity :
This code is exponential in nature, and it's time complexity will turn out to be O(n!). It is better than the brute force/naive approach which has O(n^n) time complexity.

Mathematical Proof of Time Complexity
Let us assume that the run-time for nrows is T(n). Hence, for n-1 rows, the run-time will be T(n-1).

Since, we are making at max n calls, (for n columns) to the recursive function with n-1 rows left, hence:

T(n) = n * T(n-1) + O(Checking if the configuration is valid)

For the first row {T(n)}, we will have 0 previous rows to check, for the 2nd row, we will have 1 previous row to check and so on, until the last row for which we need to check for (n-1) previous rows.


*/

function isQueenSafe(chess, row, col) {
  // check top side along the column 
  for (let i = row - 1, j = col; i >= 0; i -= 1) {
    if (chess[i][j] === 1) {
      return false;
    }
  }

  // Check left side diagonal 
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
    if (chess[i][j] === 1) {
      return false;
    }
  }

  // Check right side diagonal 
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess[0].length; i -= 1, j += 1) {
    if (chess[i][j] === 1) {
      return false;
    }
  }

  return true;
}


function printNQueens(chess, ans, row) {
  if (row === chess.length) {
    console.log(ans);
    return;
  }

  for (let col = 0; col < chess.length; col += 1) {

    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      printNQueens(chess, ans + row + "-" + col + ", ", row + 1);
      chess[row][col] = 0;
    }
  }
}

let chess = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
printNQueens(chess, "", 0);
/*
Outputs:

0-1, 1-3, 2-0, 3-2, 
0-2, 1-0, 2-3, 3-1, 

*/
