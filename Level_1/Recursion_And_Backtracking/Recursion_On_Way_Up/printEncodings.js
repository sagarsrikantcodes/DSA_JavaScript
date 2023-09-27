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

Complexity Analysis:
1. Time Complexity = O(2 ^ n), where n is the length of the string
2. Space Complexity = O(n), Due to recursive call stack

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