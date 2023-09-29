/*
Partition An Array



*/

function swap(arr, i, j) {
  console.log(`Swapping ${arr[j]} and ${arr[i]}`);
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, pivot) {
  let i = 0, j = 0;
  while (j < arr.length) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i += 1;
    }
    j += 1;
  }
}

let arr = [7, -2, 4, 1, 3];
partition(arr, 3);
console.log(arr);