/*
Print KPC

Algorithm:

1. We form a global array of strings called "codes" which store the key to character elements where key is the index of the string and characters are the characters of the string at that index.
2. Base Case: If the ques length reaches 0, then we print the answer and return the function.
3. We separate the first element i.e. "6" of the given string and store it in char ch.
4. Next we store the remaining part of the given string i.e "78" in the string roq.
5. In coding , "6" != 6 . The former is a character 6 and latter is an integer 6. So to convert the character into an integer and store it in "codeforch".
6. We iterate a loop from 0 to the length-1 of string corresponding to codeforch to get index of each character of that string.For example, if chodeforch=6 then loop iterates from 0 to 3 to get the characters p, q, r and s.
7. The function printKPC is recursively called on roq i.e. 78 as the "ques" and "ans" as the sum of previous answer and character corresponding to cho (i.e. character at each index of the string corresponding to codeforch) .




 0 -> .;
   1 -> abc
   2 -> def
   3 -> ghi
   4 -> jkl
   5 -> mno
   6 -> pqrs
   7 -> tu
   8 -> vwx
   9 -> yz

   input: str = "78", asf = ""

   output: 
   tv
   tw
   tx
   uv
   uw
   ux

   Time Complexity:

The function processes each digit in the input string str one by one.
For each digit, it iterates through the corresponding characters in codesForChar.
The number of characters in each digit's character set is constant (typically 3 or 4 characters per digit).
Therefore, the time complexity of the function is O(3^m * 4^n), where m is the number of digits in str that correspond to digits with 3 characters, and n is the number of digits in str that correspond to digits with 4 characters.
In the worst case, when all digits have 4 characters associated with them, the time complexity becomes O(4^n), which is exponential with respect to the number of digits in the input string. This is because the function explores all possible combinations of characters for each digit.

Space Complexity:

The space complexity is determined by the stack space used for the recursive calls.
The maximum depth of the recursion is equal to the length of the input string str.
Therefore, the space complexity of this code is O(n), where n is the length of the input string str.
In summary:

Time Complexity: O(3^m * 4^n) in general, O(4^n) in the worst case.
Space Complexity: O(n)
The time complexity can be quite high for long input strings with many digits, especially if those digits correspond to characters with 4 options each. Therefore, it's important to be mindful of the input size when using this function.

*/

let codesForChar = ['.;', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tu', 'vwx', 'yz'];

function printKPC(str, ans) {
  // Base case condition
  if (str === "") { // 1
    console.log(ans);
    return;
  }

  let ch = str.charAt(0); // 2
  let ros = str.substring(1); // 3
  let codeForCh = codesForChar[ch - "0"]; // 4
  for (let i = 0; i < codeForCh.length; i += 1) {
    let char = codeForCh.charAt(i);
    printKPC(ros, ans + char);
  }
}

printKPC('', '');
printKPC('8', '');
/*

v 
w
x

*/
console.log();
printKPC('78', '');
/*
Outputs:

tv
tw
tx
uv
uw
ux

*/

