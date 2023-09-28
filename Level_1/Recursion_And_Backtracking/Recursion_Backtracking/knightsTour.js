/*
Knights Tour 

input:
chess = [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

r = 2
c = 0

upcomingMove = 1

output:

25 2 13 8 23 
12 7 24 3 14 
1 18 15 22 9 
6 11 20 17 4 
19 16 5 10 21 

19 2 13 8 21 
12 7 20 3 14 
1 18 15 22 9 
6 11 24 17 4 
25 16 5 10 23 

25 2 13 8 19 
12 7 18 3 14 
1 24 15 20 9 
6 11 22 17 4 
23 16 5 10 21 

19 2 13 8 25 
12 7 18 3 14 
1 20 15 24 9 
6 11 22 17 4 
21 16 5 10 23 

21 2 17 8 19 
12 7 20 3 16 
1 22 13 18 9 
6 11 24 15 4 
23 14 5 10 25 

23 2 17 8 25 
12 7 24 3 16 
1 22 13 18 9 
6 11 20 15 4 
21 14 5 10 19 

25 2 17 8 23 
12 7 24 3 16 
1 18 13 22 9 
6 11 20 15 4 
19 14 5 10 21 

19 2 17 8 21 
12 7 20 3 16 
1 18 13 22 9 
6 11 24 15 4 
25 14 5 10 23 

25 2 15 8 19 
16 7 18 3 14 
1 24 11 20 9 
6 17 22 13 4 
23 12 5 10 21 

19 2 15 8 25 
16 7 18 3 14 
1 20 11 24 9 
6 17 22 13 4 
21 12 5 10 23 

21 2 15 8 19 
16 7 20 3 14 
1 22 11 18 9 
6 17 24 13 4 
23 12 5 10 25 

23 2 15 8 25 
16 7 24 3 14 
1 22 11 18 9 
6 17 20 13 4 
21 12 5 10 19 

23 2 13 8 21 
14 7 22 3 12 
1 24 9 20 17 
6 15 18 11 4 
25 10 5 16 19 

21 2 13 8 23 
14 7 22 3 12 
1 20 9 24 17 
6 15 18 11 4 
19 10 5 16 25 

25 2 13 8 19 
14 7 18 3 12 
1 24 9 20 17 
6 15 22 11 4 
23 10 5 16 21 

19 2 13 8 25 
14 7 18 3 12 
1 20 9 24 17 
6 15 22 11 4 
21 10 5 16 23 

21 2 11 16 19 
12 17 20 3 10 
1 22 7 18 15 
6 13 24 9 4 
23 8 5 14 25 

23 2 11 16 25 
12 17 24 3 10 
1 22 7 18 15 
6 13 20 9 4 
21 8 5 14 19 

23 2 11 16 21 
12 17 22 3 10 
1 24 7 20 15 
6 13 18 9 4 
25 8 5 14 19 

21 2 11 16 23 
12 17 22 3 10 
1 20 7 24 15 
6 13 18 9 4 
19 8 5 14 25 

21 2 9 14 19 
10 15 20 3 8 
1 22 5 18 13 
16 11 24 7 4 
23 6 17 12 25 

23 2 9 14 25 
10 15 24 3 8 
1 22 5 18 13 
16 11 20 7 4 
21 6 17 12 19 

25 2 9 14 23 
10 15 24 3 8 
1 18 5 22 13 
16 11 20 7 4 
19 6 17 12 21 

19 2 9 14 21 
10 15 20 3 8 
1 18 5 22 13 
16 11 24 7 4 
25 6 17 12 23 

23 2 7 12 21 
8 13 22 17 6 
1 24 3 20 11 
14 9 18 5 16 
25 4 15 10 19 

21 2 7 12 23 
8 13 22 17 6 
1 20 3 24 11 
14 9 18 5 16 
19 4 15 10 25 

25 2 7 12 23 
8 13 24 17 6 
1 18 3 22 11 
14 9 20 5 16 
19 4 15 10 21 

19 2 7 12 21 
8 13 20 17 6 
1 18 3 22 11 
14 9 24 5 16 
25 4 15 10 23 

25 4 15 10 23 
14 9 24 5 16 
1 18 3 22 11 
8 13 20 17 6 
19 2 7 12 21 

19 4 15 10 21 
14 9 20 5 16 
1 18 3 22 11 
8 13 24 17 6 
25 2 7 12 23 

25 4 15 10 19 
14 9 18 5 16 
1 24 3 20 11 
8 13 22 17 6 
23 2 7 12 21 

19 4 15 10 25 
14 9 18 5 16 
1 20 3 24 11 
8 13 22 17 6 
21 2 7 12 23 

21 6 17 12 19 
16 11 20 7 4 
1 22 5 18 13 
10 15 24 3 8 
23 2 9 14 25 

23 6 17 12 25 
16 11 24 7 4 
1 22 5 18 13 
10 15 20 3 8 
21 2 9 14 19 

25 6 17 12 23 
16 11 24 7 4 
1 18 5 22 13 
10 15 20 3 8 
19 2 9 14 21 

19 6 17 12 21 
16 11 20 7 4 
1 18 5 22 13 
10 15 24 3 8 
25 2 9 14 23 

25 8 5 14 19 
6 13 18 9 4 
1 24 7 20 15 
12 17 22 3 10 
23 2 11 16 21 

19 8 5 14 25 
6 13 18 9 4 
1 20 7 24 15 
12 17 22 3 10 
21 2 11 16 23 

21 8 5 14 19 
6 13 20 9 4 
1 22 7 18 15 
12 17 24 3 10 
23 2 11 16 25 

23 8 5 14 25 
6 13 24 9 4 
1 22 7 18 15 
12 17 20 3 10 
21 2 11 16 19 

21 12 5 10 19 
6 17 20 13 4 
1 22 11 18 9 
16 7 24 3 14 
23 2 15 8 25 

23 12 5 10 25 
6 17 24 13 4 
1 22 11 18 9 
16 7 20 3 14 
21 2 15 8 19 

23 12 5 10 21 
6 17 22 13 4 
1 24 11 20 9 
16 7 18 3 14 
25 2 15 8 19 

21 12 5 10 23 
6 17 22 13 4 
1 20 11 24 9 
16 7 18 3 14 
19 2 15 8 25 

21 14 5 10 19 
6 11 20 15 4 
1 22 13 18 9 
12 7 24 3 16 
23 2 17 8 25 

23 14 5 10 25 
6 11 24 15 4 
1 22 13 18 9 
12 7 20 3 16 
21 2 17 8 19 

25 14 5 10 23 
6 11 24 15 4 
1 18 13 22 9 
12 7 20 3 16 
19 2 17 8 21 

19 14 5 10 21 
6 11 20 15 4 
1 18 13 22 9 
12 7 24 3 16 
25 2 17 8 23 

23 16 5 10 21 
6 11 22 17 4 
1 24 15 20 9 
12 7 18 3 14 
25 2 13 8 19 

21 16 5 10 23 
6 11 22 17 4 
1 20 15 24 9 
12 7 18 3 14 
19 2 13 8 25 

25 16 5 10 23 
6 11 24 17 4 
1 18 15 22 9 
12 7 20 3 14 
19 2 13 8 21 

19 16 5 10 21 
6 11 20 17 4 
1 18 15 22 9 
12 7 24 3 14 
25 2 13 8 23 

23 10 5 16 21 
6 15 22 11 4 
1 24 9 20 17 
14 7 18 3 12 
25 2 13 8 19 

21 10 5 16 23 
6 15 22 11 4 
1 20 9 24 17 
14 7 18 3 12 
19 2 13 8 25 

25 10 5 16 19 
6 15 18 11 4 
1 24 9 20 17 
14 7 22 3 12 
23 2 13 8 21 

19 10 5 16 25 
6 15 18 11 4 
1 20 9 24 17 
14 7 22 3 12 
21 2 13 8 23 

Complexity Analysis:
1. Time Complexity = O(8 * N ^ 2)
2. SPace COmplexity = O(N ^ 2) if we include the recursive call stack while traversing the 2D chess board.

Algorithm:
1. Base Case Scenarios:
  1.1 If r >= arr.length OR c >= arr[r].length OR r < 0 OR c < 0 OR chess[r][c] > 0, Just return void to the calling function.
  1.2 If the upcomingMove is equal to arr.length * arr[r].length, 
  Assign the value of upcomingMove to chess[r][c].
  display the chess board 
  Reassign chess[r][c] to 0 since we are looking at all the possible patterns.
  return void to the calling function.

2. Recursive Cases:
  2.0 For every move, assign chess[r][c] to the updated value of the variable upcomingMove.
  2.1 Recursively call the function starting from r - 2, c + 1 and increment the upcomingMove by 1.
  2.2 Recursively call the function at r - 1, c + 2 and increment the upcomingMove by 1.
  2.3 Recursively call the function at r + 1, c + 2 and increment the upcomingMove by 1.
  2.4 Recursively call the function at r + 2, c + 1 and incrmeent the upcomingMove by 1.
  2.5 Recursively call the function at r + 2, c - 1 and increment the upcomingMove by 1.
  2.6 Recursively call the function at r + 1, c - 2 and increment the upcomingMove by 1.
  2.7 Recursively call the function at r - 1, c - 2 and incremeent the upcomingMove by 1.
  2.8 Recursively call the function at r - 2, c - 1 and increment the upcomingMove by 1.
  2.9 After all the recursive function calls, reassign chess[r][c] to 0.


 let's analyze the time and space complexity of your solution:

Time Complexity:

In the worst case, your code explores all possible moves of the knight on the chessboard. There are eight possible moves for each position.
For each move, the code makes a recursive call. So, for each move, you explore all possible subsequent moves.
The total number of moves explored is proportional to 8^N, where N is the number of cells on the chessboard.
Therefore, the time complexity is O(8^N).
Space Complexity:

The primary use of space in your code is for the chess board, which is a 2D array of size N x N.
Additionally, the space complexity also includes the space used by the recursive call stack. In the worst case, the stack depth can be N^2 (since you can explore N^2 cells before reaching the base case).
So, the space complexity is O(N^2) for the chessboard and O(N^2) for the recursive call stack.
The overall space complexity is O(N^2 + N^2), which simplifies to O(N^2).
Overall, your code has an exponential time complexity and a quadratic space complexity due to the recursive nature of the problem and the use of a 2D chessboard. This is expected for the Knight's Tour problem, as it's a challenging problem that requires exploring a large number of possible solutions. Your code appears to be correctly structured to handle this problem, and the time and space complexity analysis is consistent with the nature of the problem.


*/

function printKnightsTour(chess, r, c, upcomingMove) {
  // Base case 1
  if (r < 0 || c < 0 || r >= chess.length || c >= chess.length || chess[r][c] > 0) {
    return;
  }

  // Base case 2
  if (upcomingMove === chess.length * chess[0].length) {
    chess[r][c] = upcomingMove;
    console.log(chess);
    chess[r][c] = 0;
    return;
  }

  chess[r][c] = upcomingMove;
  // Recursively calling function in clockwise pattern for Knights eight possible moves
  printKnightsTour(chess, r - 2, c + 1, upcomingMove + 1);
  printKnightsTour(chess, r - 1, c + 2, upcomingMove + 1);
  printKnightsTour(chess, r + 1, c + 2, upcomingMove + 1);
  printKnightsTour(chess, r + 2, c + 1, upcomingMove + 1);
  printKnightsTour(chess, r + 2, c - 1, upcomingMove + 1);
  printKnightsTour(chess, r + 1, c - 2, upcomingMove + 1);
  printKnightsTour(chess, r - 1, c - 2, upcomingMove + 1);
  printKnightsTour(chess, r - 2, c - 1, upcomingMove + 1);
  chess[r][c] = 0;
}

let chess = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0]];

printKnightsTour(chess, 2, 0, 1);

/*
Java Code

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        
    }

    public static void printKnightsTour(int[][] chess, int r, int c, int upcomingMove) {
        
    }

    public static void displayBoard(int[][] chess){
        for(int i = 0; i < chess.length; i++){
            for(int j = 0; j < chess[0].length; j++){
                System.out.print(chess[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
    }
}



*/

