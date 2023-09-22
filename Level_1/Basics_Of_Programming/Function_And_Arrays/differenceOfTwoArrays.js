/*
Difference of Two Arrays

333 - 99 => 234

333 - 288 => 36


*/

function getDifference(arr1, arr2) {
  let carry = 0;
  let i = arr1.length - 1, j = arr2.length - 1;
  let sum = 0;
  let resArr = [];

  while (i >= 0 && j >= 0) {
    let res = arr1[i] + carry;
    if (res < arr2[j]) {
      res += 10;
      carry = -1;
    }
    let dig = res - arr2[j];
    resArr.unshift(dig);
    i -= 1;
    j -= 1;
  }

  while (i >= 0) {
    let res = arr1[i] + carry;
    if (res < 0) {
      res += 10;
      carry = -1;
    }
    resArr.unshift(res);
    i -= 1;
  }

  if (resArr[0] === 0) {
    resArr.shift();
  }

  return resArr;
}

console.log(getDifference([3, 2, 4], [2, 8, 8]));  // [3, 6]
console.log(getDifference([3, 3, 3], [9, 9])); // [2, 3, 4]