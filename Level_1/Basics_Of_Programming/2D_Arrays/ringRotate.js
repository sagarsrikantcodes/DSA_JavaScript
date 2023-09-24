/*
Ring Rotate

Input:
arr = [[11, 12, 13, 14, 15, 16, 17],
[21, 22, 23, 24, 25, 26, 27],
[31, 32, 33, 34, 35, 36, 37],
[41, 42, 43, 44, 45, 46, 47],
[51, 52, 53, 54, 55, 56, 57],
[61, 62, 63, 64, 65 66, 67]]

s = 2
r = 3


Output:

11 12 13 14 15 16 17
21 25 26 36 46 45 27
31 24 33 34 35 44 37
41 23 22 32 42 43 47
51 52 53 54 55 56 57

Problem Discussion:
We have a n*m matrix where n is the number of rows and m is the number of columns. You will be given a ring number 's' representing the ring of the matrix. Here is an image for reference:

We will be given a number 'r' representing the number of rotations in an anti-clockwise manner of the specified ring. We are required to rotate the 's'th ring by 'r' rotations and display the rotated matrix.

Constraints
1 <= n <= 10^2
1 <= m <= 10^2
-10^9 <= e11, e12, .. n * m elements <= 10^9
0 < s <= min(n, m) / 2
-10^9 <= r <= 10^9

Important Note: If you look at the constraints, you will see r can be negative. If r is positive we will rotate it in an anti-clockwise fashion, else if it is negative we will do it in a clockwise fashion.

Dear reader, if you have understood the problem correctly I would insist you try to figure out an approach. If you want you can also look at the Question Video linked above to get a proper understanding of the problem.

There is actually a prerequisite to this problem. If you haven't solved Reversing an array and 1D array rotation first try those problems and come back because we will be taking the help of those functions to solve this problem.

Approach:
We will break our approach into the following steps:

Convert the shell to a 1D array.
Rotate the 1D array by r.
Convert the rotated 1D array back to the shell.
Corresponding pseudocode will be:

oned = fillOnedFromShell(arr, s);
rotate(oned, r);
fillShellFromOned(arr, s, oned);

Now, we can assume you are already aware of step-2, so we will mainly focus on step-1 and step-3 here.

But still, we will just touch upon step-2. We will call the reverse() function thrice to shift a one-dimensional array. Take the following array for example: [1, 2, 3, 4 ,5 ,6, 7] shift=3.

We will first reverse the first (n-shift) elements. i.e 4 elements.
Then we will reverse the last shift elements i.e 3 elements.
Then we will reverse the entire array.

shift = 3

1 2 3 4  5 6 7
reverse first 4 elements
4 3 2 1 5 6 7
reverse last 3 elements
4 3 2 1 7 6 5
reverse entire elements
5 6 7 1 2 3 4

This will be the pseudocode for rotate():

reverse(oned, 0, oned.length-r-1);
reverse(oned, oned,length-r, oned.length-1);
reverse(oned, 0, oned.length);

Now let's focus on getting an array from the shell and vice versa i.e, updating the shell from the array.

For the first part, all we have to do is to iterate over the walls of the shell.

Let's look at the top left corner index of a shell and the bottom left corner index of the same shell.

For shell-1, the top left is (0, 0) and the bottom right is (n-1, m-1).

For shell-2, the top left is (1, 1) and the bottom right is (n-2, m-2).

For shell-3, the top left is (2, 2) and the bottom right is (n-3, m-3).

We can quite easily notice a pattern over here.

For shell-s the top left is (s-1, s-1) and the bottom right is (n-s, m-s).

If you have completely understood so far. I will ask a question. What is the number of elements in a particular shell? Look at the following illustration:




The total number of elements will be: 2x(number of elements in a row) + 2x(number of elements in the col). But is that it? Are we overcounting? Yes. We are overcounting the vertex nodes. So it will be

2x( # of elements in a row) + 2x(# of elements in the col) - 4

Analysis
Time Complexity:
O(n+m)

SPACE COMPLEXITY:
O(n+m)


*/

// Code with Implementation 



function fillOneDimensionalArrayFromShell(arr, s) {
  let minr = s - 1;
  let minc = s - 1;
  let maxr = arr.length - s;
  let maxc = arr[0].length - s;
  let size = 2 * (maxr - minr) + 2 * (maxc - minc);
  let oneDArr = [];

  for (let i = minr, j = minc; i <= maxr; i += 1) {
    oneDArr.push(arr[i][j]);
  }

  for (let i = maxr, j = minc + 1; j <= maxc; j += 1) {
    oneDArr.push(arr[i][j]);
  }

  for (let i = maxr - 1, j = maxc; i >= minr; i -= 1) {
    oneDArr.push(arr[i][j]);
  }

  for (let i = minr, j = maxc - 1; j > minc; j -= 1) {
    oneDArr.push(arr[i][j]);
  }

  return oneDArr;
}

function rotate(oneDimensionalArray, r) {
  r = r % oneDimensionalArray.length;
  if (r < 0) {
    r += oneDimensionalArray.length;
  }

  reverse(oneDimensionalArray, 0, oneDimensionalArray.length - r - 1);
  reverse(oneDimensionalArray, oneDimensionalArray.length - r, oneDimensionalArray.length - 1);
  reverse(oneDimensionalArray, 0, oneDimensionalArray.length - 1);
}

function reverse(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i += 1;
    j -= 1;
  }
}

function fillShellFromOneDimensionalArray(arr, s, oneDimensionalArray) {
  let minr = s - 1;
  let minc = s - 1;
  let maxr = arr.length - s;
  let maxc = arr[0].length - s;

  let index = 0;
  for (let i = minr, j = minc; i <= maxr; i += 1) {
    arr[i][j] = oneDimensionalArray[index];
    index += 1;
  }

  for (let i = maxr, j = minc + 1; j <= maxc; j += 1) {
    arr[i][j] = oneDimensionalArray[index];
    index += 1;
  }

  for (let i = maxr - 1, j = maxc; i >= minr; i -= 1) {
    arr[i][j] = oneDimensionalArray[index];
    index += 1;
  }

  for (let i = minr, j = maxc - 1; j > minc; j -= 1) {
    arr[i][j] = oneDimensionalArray[index];
    index += 1;
  }
}

function rotateShell(arr, s, r) {
  let oneDimensionalArray = fillOneDimensionalArrayFromShell(arr, s);
  rotate(oneDimensionalArray, r);
  fillShellFromOneDimensionalArray(arr, s, oneDimensionalArray);
}

arr = [[11, 12, 13, 14, 15, 16, 17],
[21, 22, 23, 24, 25, 26, 27],
[31, 32, 33, 34, 35, 36, 37],
[41, 42, 43, 44, 45, 46, 47],
[51, 52, 53, 54, 55, 56, 57],
[61, 62, 63, 64, 65, 66, 67]];

rotateShell(arr, 2, 3);
console.log(arr);

/*
[
  [11, 12, 13, 14,15, 16, 17],
  [21, 25, 26, 36,46, 56, 27],
  [31, 24, 33, 34,35, 55, 37],
  [41, 23, 43, 44,45, 54, 47],
  [51, 22, 32, 42,52, 53, 57],
  [61, 62, 63, 64,65, 66, 67]
]





*/






