/*
Print Encodings

Test Cases:

Test Case 1
input: "123"
output: 
"abc"
"aw"
"lc"

Test Case 2
input: "993"
output:
"iic"

Test Case 3
input: 103
output:
"jc"

Algorithm:
Here's a summary of the code:

You have defined an object called object that maps digits from '1' to '26' to their corresponding alphabet characters.

The printEncodings function is a recursive function that takes two parameters: str (the input string to be encoded) and ans (the current encoding being built).

In the base case, if the input string str is empty, it prints the current encoding ans.

In the recursive case, it checks the first character of str:

If the first character is not '0', it considers the single-character encoding (e.g., '1' maps to 'a') and makes a recursive call with the rest of the string.
It also checks if the first two characters form a valid encoding (e.g., '12' maps to 'ab'). If so, it makes a recursive call with the remaining string.
The code handles cases where the input string starts with '0' and returns immediately, indicating that such strings are invalid.

You have provided several test cases, and the code produces the expected output for those test cases.


Complexity Analysis:
1. Time Complexity = O(2 ^ n), where n is the length of the string
2. Space Complexity = O(n), Due to recursive call stack

The time complexity of this code is O(2^n), where n is the length of the string, as in the worst case, you explore two possibilities for each character.

The space complexity is O(n) due to the recursive call stack.

*/

let object = {
  '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h',
  '9': 'i', '10': 'j', '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o', '16': 'p', '17': 'q',
  '18': 'r', '19': 's', '20': 't', '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
};

function printEncodings(str, ans) {
  // Base Case 
  if (str === "") { // 1
    console.log(ans);
    return;
  }

  if (str.charAt(0) !== "0") {
    let ch = str.charAt(0);
    let ros = str.slice(1);
    printEncodings(ros, ans + object[ch]);
    let twoChars = str.substring(0, 2);
    if (twoChars in object && twoChars.length === 2) {
      printEncodings(str.slice(2), ans + object[twoChars]);
    }
  } else {
    return;
  }
}

printEncodings("123", "");
/*
abc
aw
lc
*/
console.log();
printEncodings("655196", "");
/*
feeaif
feesf
*/

console.log();
printEncodings("103", ""); // jc
console.log();
printEncodings("993", ""); // iic
console.log();
printEncodings("013", ""); // print nothing
console.log();
printEncodings("303", ""); // print nothing

/*
public static void printEncodings(String str) {
        
}
*/