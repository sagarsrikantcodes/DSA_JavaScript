/*
Get Common Elements - 2

1. You are given a number n1, representing the size of array a1.
2. You are given n1 numbers, representing elements of array a1.
3. You are given a number n2, representing the size of array a2.
4. You are given n2 numbers, representing elements of array a2.
5. You are required to find the intersection of a1 and a2. To get an idea check the example below:
 
if a1 -> 1 1 2 2 2 3 5
and a2 -> 1 1 1 2 2 4 5
intersection is -> 1 1 2 2 5

Note -> Don't assume the arrays to be sorted. Check out the question video. 

Input Format
A number n1
n1 number of elements line separated
A number n2
n2 number of elements line separated
Output Format
All relevant elements of intersection in separate lines
The elements of intersection should be printed in order of their occurence in a2. 

Constraints
1 <= n1, n2 <= 100
0 <= a1[i], a2[i] < 10
Time complexity should be O(n) 

Example / Test Cases:
Test Case - 1
input: arr1 = [1, 1, 2, 2, 2, 3, 5], arr2 = [1, 1, 1, 2, 2, 4, 5] 
output: res = [1, 1, 2, 2, 5]

Data Structures:
input: array of integers 
output: array of integers 
Function Execution: Hashmap to represent the frequency of the individual numbers. 

Algorithm:
- Declare and Create an empty array, `res`.
- Declare and Create a variable named map1 and initialize it to an empty hashmap. 
- Iterate through the arr1 and update the frequency/count of individual elements in map1.
- Test the map1 by logging to the console.
- Iterate through the arr2, 
  - Check if the element of arr2 is present in map1 AND if the value of the key in map1 is greater than 0. 
    - If it is, Append the element of arr2 to the res array and decrement the count in map1 by 1. 
- Return the `res` array to the calling function. 

Complexity Analysis:
1. Time Complexity = O(N + M) , where N is length of arr1 and M is length of arr2. 
2. Space Complexity = O(N), Due to hashmap, map1. 

*/

function getCommonElements2(arr1, arr2) {
  let res = [];
  let map1 = new Map();
  arr1.forEach(number => map1.set(number, 1 + (map1.get(number) || 0)));
  console.log(map1);

  arr2.forEach(number => {
    if (map1.has(number) && map1.get(number) > 0) {
      res.push(number);
      map1.set(number, map1.get(number) - 1);
    }
  });

  return res;
}

let arr1 = [1, 1, 2, 2, 2, 3, 5];
let arr2 = [1, 1, 1, 2, 2, 4, 5];
console.log(getCommonElements2(arr1, arr2)); // [1, 1, 2, 2, 5]
/*
Map(4) { 1 => 2, 2 => 3, 3 => 1, 5 => 1 }

*/