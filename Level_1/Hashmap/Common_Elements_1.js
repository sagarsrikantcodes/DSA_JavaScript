/*
Get Common Elements - 1

1. You are given a number n1, representing the size of array a1.
2. You are given n1 numbers, representing elements of array a1.
3. You are given a number n2, representing the size of array a2.
4. You are given n2 numbers, representing elements of array a2.
5. You are required to print all elements of a2 which are also present in a1 (in order of their occurence in a2). Make sure to not print duplicates (a2 may have same value present many times).

Input Format
A number n1
n1 number of elements line separated
A number n2
n2 number of elements line separated

Output Format
All relevant elements of a2 in separate lines (no duplicacy) 

Constraints
1 <= n1, n2 <= 100
0 <= a1[i], a2[i] < 10
Time complexity should be O(n) 

Example / Test Cases: 
TC - 1
input: arr1 = [5, 5, 9, 8, 5, 5, 8, 0, 3] , arr2 = [9, 7, 1, 0, 3, 6, 5, 9, 1, 1, 8, 0, 2, 4, 2, 9, 1, 5]
output: res = [9, 0, 3, 5, 8]

Data Structures: 
inputs: Array of integers
outputs: Array of integers representing common elements. 
Function Execution: Hashset to avoid duplicates. 

Algorithm:
- Declare and Create an empty array named `res`.
- Declare and Create a hashset, `set1` and `set2` and initialize it to an empty Hashset. 
- Iterate through the arr1 and collect unique elements from arr1 in set1 and 
- Ierate through arr2 and collect unique elements from arr2 in set2. 
- Testing: Check if the values of set1 and set2 are expected values by logging them to console.
- Iterate through set2 
  - Check if the value is present in set1, If it is present then append the value in `res` array.
- Return the value of `res` to the calling function. 

Complexity Analysis:
1. Time Complexity = O(N + M + m2), Where N is the length of arr1 and M is the length of arr2. 
2. Space Complexity = O(m1 + m2), Whwere m1 is the size of set1 and m2 is the size of set2. 

*/

function getCommonElements1(arr1, arr2) {

  let res = [];
  let set1 = new Set();
  let set2 = new Set();
  arr1.forEach(num => set1.add(num));
  console.log(set1);
  arr2.forEach(num => set2.add(num));
  console.log(set2);

  for (let value of set2) {
    if (set1.has(value)) {
      res.push(value);
    }
  }

  return res;
}

console.log(getCommonElements1([5, 5, 9, 8, 5, 5, 8, 0, 3], [9, 7, 1, 0, 3, 6, 5, 9, 1, 1, 8, 0, 2, 4, 2, 9, 1, 5])); // [ 9, 0, 3, 5, 8 ] 

