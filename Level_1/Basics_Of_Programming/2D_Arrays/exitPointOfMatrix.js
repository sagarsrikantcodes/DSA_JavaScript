/*
Exit Point of a Matrix

Moving in East Direction (->) j++
Moving in South Direction (|) i++
Moving in West Direction (<-) j--
Moving in North Direction (|^) i--

East = 0
South = 1
West = 2
North = 3

Pseudo Code:
Initialize dir variable to 0.
Initialize i for rows and j for columns to 0 each.
Start from M[0][0]. Add M[0][0] to dir and substitute (M[0][0]+dir)%4 in dir.
If dir is still 0 keep moving forward by doing j++ and keeping i same else
Make dir=1 and start moving downward in the column by doing i++ and keeping j the same. Keep moving in the same direction until you encounter 1.
Then dir changes to 2 and you have to move in the West direction.
Similarly when dir becomes 3 move in the North direction.
Exit the loop if you come out of the matrix and print the exit point.

Analysis
Time Complexity:
We have already mentioned that the time complexity of this method is O(mxn) where m is the number of rows and n is the number of columns. You can see we may have to traverse a large part of the 2-D array depending upon the combinations of values in the matrix. Therefore, the time complexity is O(mxn). If the array is a square matrix, we may write the time complexity is: O(n2) .

SPACE COMPLEXITY:
The Space Complexity for this problem will be O(1) as we have not used any extra array or any extra memory to solve the problem.

*/

function getExitPoint(matrix) {
  let i = 0, j = 0;
  let dir = 0;

  while (true) {
    dir = (dir + matrix[i][j]) % 4;
    if (dir === 0) {
      j += 1;
    } else if (dir === 1) {
      i += 1;
    } else if (dir === 2) {
      j -= 1;
    } else if (dir === 3) {
      i -= 1;
    }

    if (i < 0) {
      i += 1;
      break;
    } else if (i > matrix.length - 1) {
      i -= 1;
      break;
    } else if (j < 0) {
      j += 1;
      break;
    } else if (j > matrix[i].length - 1) {
      j -= 1;
      break;
    }
  }

  console.log(`Exit Point of a matrix is ${[i, j]}`);
}

getExitPoint([[0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]]);