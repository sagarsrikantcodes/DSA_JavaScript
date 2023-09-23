/*
Matrix Multiplication 

input:

A = [[1, 2, 3], [4, 5, 6]]
B = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

output:

[[38, 44, 50, 56], [83, 98, 113, 128]]

Time Complexity:
O(n3)

This time complexity is cubic because 3 nested for loops are used.

SPACE COMPLEXITY:
O(n2)

As 2D arrays are used to store numbers, therefore space complexity is quadratic.

*/

function matrixMultiplication(arr1, arr2) {
  let resArr = new Array(arr1.length);

  for (let i = 0; i < resArr.length; i += 1) {
    resArr[i] = new Array(arr2[0].length);
  }

  console.log(resArr); // 2 by 4 matrix 

  for (let k = 0; k < arr2[0].length; k += 1) {
    for (let i = 0; i < arr1.length; i += 1) {
      resArr[i][k] = 0;
      for (let j = 0; j < arr1[i].length; j += 1) {
        resArr[i][k] += (arr1[i][j] * arr2[j][k]);
      }
    }
  }

  console.log(resArr);
}

console.log(matrixMultiplication([[1, 2, 3], [4, 5, 6]], [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

/*

Output:
[[38, 44, 50, 56], [83, 98, 113, 128]]

*/

