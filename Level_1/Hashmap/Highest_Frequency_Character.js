/*
Highest Frequency Character 

1. You are given a string str.
2. You are required to find the character with maximum frequency. 

Input Format
A string str

Output Format
The character with highest frequency 

Constraints
0 < str.length() <= 100
There will be a single character with highest frequency 

Sample Input
zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc 

Sample Output
q 

Problem: 
  input: String 
  output: Character 

  rules:
  Explicit Requirements:
  1. Must return the character with maximum frequency/count from a given string, str. 
  
  Implicit Requirements: 
  1. If the given string is an empty string, return an empty character. 

Example / Test Cases: 
Test Case - 1
input: str = "zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc" 
output: "q" 

Test Case - 2
input: "abcccdbabcccd"
output: "c"

Data Structures: 
Input: String 
Output: String 
Function Execution: Hashmap representing the count/frequency of all characters present in the string. 

Algorithm: 
- Edge case: If the given string is empty, return an empty string. 
- Declare and Create a variable named `max` and initialize it to minimum integer value.
- Declare and Create an empty string, res. 
- Declare and Create a hashmap, map and initialize it to an empty map object. 
- Iterate through the given string, `str`
  - Declare and Create a character, ch at index, `idx`. 
  - Set/Update the count of the character, ch in the hashmap, map.  
- Test the hashmap by logging it to the console. 
- Iterate through the key-value pairs of the hashmap, map using for..of() loop 
  - If max < value in hashmap for a particuler key 
    - Reassign the max to the updated value in hashmap.
    - Reassign `res` to key. 
- Return the value of `res` .

Complexity Analysis:
1. Time COmplexity = O(N + M) => O(N) since we are iterating through the length of the given string, str and also we are iterating through the size of the hashmap. 

2. SPace Complexity = O(M) due to the size of the hashmap. 

*/

function getHighestFrequencyCharacter(str) {
  if (str === "") {
    return "";
  }

  let max = Number.MIN_VALUE;
  let res = "";

  const map = new Map();

  for (let idx = 0; idx < str.length; idx += 1) {
    let ch = str.charAt(idx);
    map.set(ch, 1 + (map.get(ch) || 0));
  }

  console.log(map);
  console.log();

  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      res = key;
    }
  }

  return res;
}
console.log();
console.log(getHighestFrequencyCharacter("zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc")); // 'q'
console.log();
console.log(getHighestFrequencyCharacter("abcccdbabcccd")); // "c"
console.log();
console.log(getHighestFrequencyCharacter("abracadabra")); // "a"