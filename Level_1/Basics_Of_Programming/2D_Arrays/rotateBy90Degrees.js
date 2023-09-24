/*
Rotate by 90 Degrees

Input:
arr = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]

Output:
res = [[41, 31, 21, 11], [42, 32, 22, 12], [43, 33, 23, 13], [44, 34, 24, 14]]

Analysis
Time Complexity:
The time complexity for rotating the matrix by this procedure is O(n2) as for transposing we are traversing the upper triangle i.e. we are traversing n2/2 elements and then reversing takes O(n) time and we have to reverse n rows. So it becomes O(n2 + n2/2) which is O(n2).

SPACE COMPLEXITY:
The space complexity is O(1) as we are transposing and then reversing in-place and we are not consuming any auxiliary memory.

*/

function rotateBy90Degrees(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    let subArr = new Array(4);
    res.push(subArr);
  }

  // console.log(res); // 4 by 4 matrix

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      // console.log(arr[i][j]);
      res[j][arr.length - 1 - i] = arr[i][j];
    }
  }

  return res;
}
let arr = [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]];
console.log(rotateBy90Degrees(arr));
/*
Output:

[
  [ 41, 31, 21, 11 ],
  [ 42, 32, 22, 12 ],
  [ 43, 33, 23, 13 ],
  [ 44, 34, 24, 14 ]
]



*/