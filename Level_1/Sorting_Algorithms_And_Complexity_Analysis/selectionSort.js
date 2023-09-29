/*
Selection Sort Algorithm

input:
arr = [9, 1, 8, 2, 7, 3, 6, 4, 5]

output:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. SPace Complexity = O(1)

Here's a breakdown of your code and a quick review:

You correctly initialize startIdx to 0, indicating the starting point for the unsorted part of the array.

The outer while loop continues until startIdx reaches the end of the array. This loop represents the process of selecting the minimum element and moving it to the sorted part of the array.

Inside the loop, you correctly initialize min to Number.MAX_VALUE and min_Idx to startIdx to keep track of the minimum element and its index within the unsorted part of the array.

The nested for loop iterates through the unsorted part of the array, searching for the minimum element. When a smaller element is found, you update min and min_Idx accordingly.

After finding the minimum element in the unsorted part, you use array destructuring to swap it with the element at startIdx, effectively moving it to the sorted part of the array.

Finally, you increment startIdx to continue the process for the next element in the unsorted part of the array.

Your time complexity analysis of O(N^2) and space complexity analysis of O(1) are correct for this implementation. Selection sort is a straightforward sorting algorithm, and your code effectively demonstrates its operation.

*/


function selectionSort(arr) {
  let startIdx = 0;

  while (startIdx < arr.length) {
    let min = Number.MAX_VALUE, min_Idx = startIdx;

    for (let i = startIdx; i < arr.length; i += 1) {
      if (min > arr[i]) {
        min = arr[i];
        min_Idx = i;
      }
    }
    // console.log(min);

    [arr[startIdx], arr[min_Idx]] = [arr[min_Idx], arr[startIdx]];
    startIdx += 1;
  }
}

let arr = [9, 1, 8, 2, 7, 3, 6, 4, 5];
selectionSort(arr);
console.log(arr);