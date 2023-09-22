/*
Sum of Two Arrays

31075 + 111111 => 142186

input: arr1 = [3,1,0,7,5], arr2 = [1,1,1,1,1,1]
output: [1, 4, 2, 1, 8, 6]

Algorithm:
0. Declare and Create a variable named carry and initialize it to 0.
1. Declare and Create two indices named i and j to arr1.length - 1 and arr2.length - 1.
2. Declare and Create an arrayrefvar, res and initialize it to an empty array.
3. Run a while loop as long as i >= 0 AND j >= 0:
  - assign the value of res at the end index to carry + arr1[i] + arr2[j]
4. Run a while loop as long as i >= 0
  - assign the value of res at the end index to carry + arr1[i]
5. Run a while loop as long as j >= 0
  - assign the value of res at the end index to carry + arr2[j]
6. Return the value of res to the calling function.

Complexity Analysis:
1. Time Complexity = O(M + N)
2. Space Complexity = O(N) if N > M and O(M) if M > N

*/

function sumOfTwoArrays(arr1, arr2) {
  let carry = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let res = [];

  while (i >= 0 && j >= 0) {
    res.unshift((arr1[i] + arr2[j] + carry) % 10);
    carry = Math.floor((arr1[i] + arr2[j] + carry) / 10);
    i -= 1;
    j -= 1;
  }
  // console.log(`res is ${res}`);

  while (i >= 0) {
    res.unshift((carry + arr1[i]) % 10);
    carry = Math.floor((carry + arr1[i]) / 10);
    i -= 1;
  }

  while (j >= 0) {
    res.unshift((carry + arr2[j]) % 10);
    carry = Math.floor((carry + arr2[j]) / 10);
    j -= 1;
  }

  if (arr1.length === arr2.length) {
    res.unshift(carry);
  }

  return res;
}

console.log(sumOfTwoArrays([3, 1, 0, 7, 5], [1, 1, 1, 1, 1, 1])); // [1,4,2,1,8,6]
console.log(sumOfTwoArrays([9, 9, 9], [9, 9, 9])); // [ 1, 9, 9, 8]
console.log(sumOfTwoArrays([9, 9, 9, 9], [9, 9, 9, 9])); // [ 1, 9, 9, 9, 8]
console.log(sumOfTwoArrays([9, 3, 4, 6, 8], [1, 9, 8, 8])); // [9,5,4,5,6]