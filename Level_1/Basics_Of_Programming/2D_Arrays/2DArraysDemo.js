/*

2D Arrays Demo

Input elements and Output elements

input: [[1, 2], [3, 4]]

Time Complexity:
O(n2)

This time complexity is quadratic due to the use of nested for loops.

SPACE COMPLEXITY:
O(n2)

As a 2D array is used to store input values, therefore space complexity is quadratic.

*/

let array = [[1, 2], [3, 4]];

array.forEach(subArr => {
  subArr.forEach(number => {
    console.log(number);
  });
});

