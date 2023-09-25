/*
Get KPC

Code Discussion
We form a global array of strings called "codes" which store the key to character elements where key is the index of the element and characters are the characters of the string at that index.
Base Case: If the string length reaches 0, then a new ArrayList bres is created .A blank is added to it and it is returned.
We separate the first element i.e. "5" of the given string and store it in char ch.
Next we store the remaining part of the given string i.e "73" in the string ros.
The function getKPC is recursively called on ros and we have faith that it will provide us the keypad combinations for string "73".
In coding , "6" != 6 . The former is a character 6 and latter is an integer 6. So to convert a character into an integer we write the given code.
We apply a for loop for every keypad combination of "73" which is stored in rres and then add each character corresponding to "5" to every output of "73". This is eventually added in our final ArrayList mres.
At last, we return our final ArrayList mres where the output for "573" is stored.
Please refer to "Get KPC" Solution Video for an extensive discussion of this code.



Time Complexity:

The time complexity of this code is O(4^n), where 'n' is the length of the input string str. This is because, for each digit in the input string, the function generates all possible combinations of characters associated with that digit. In the worst case, each digit maps to 4 characters (e.g., '7' maps to "pqrs" and '8' maps to "tu"), so you have a branching factor of 4 at each level of recursion. The depth of the recursion tree is 'n', so you have 4^n recursive calls in the worst case.

Space Complexity:

The space complexity of this code is O(4^n) as well. This is because, in each recursive call, the function creates new arrays (rres and mres) to store the results. The depth of the recursion tree is 'n', and at each level, the function creates new arrays. Therefore, the space complexity is O(4^n) to account for all the different combinations stored in these arrays.

In your example, when you call getKPC("78"), it generates and returns all possible combinations of characters associated with the digits '7' and '8', which are "pqrs" and "tu" respectively, resulting in the array ["tv", "tw", "tx", "uv", "uw", "ux"].

*/

let codes = [".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"];

function getKPC(str) { // 1
  if (str.length === 0) {
    let bres = [];
    bres.push("");
    return bres;
  }

  let char = str.charAt(0); // 2
  let restOfString = str.substring(1); // 3
  let rres = getKPC(restOfString); // 4
  let mres = []; // 5

  let codeforchar = codes[char - "0"]; // 6

  for (let i = 0; i < codeforchar.length; i += 1) { // 7
    let chcode = codeforchar.charAt(i);
    rres.forEach(val => mres.push(chcode + val));
  }

  return mres; // 8
}

console.log(getKPC("78")); // [tv, tw, tx, uv, uw, ux]
console.log(getKPC('8')); // ['v', 'w', 'x']
console.log(getKPC("3")); // ['g', 'h', 'i']
console.log(getKPC("")); // ['']


/*
Code in Java

import java.io.*;

import java.util.*;

public class Main {

  public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    String str = scn.next();
    ArrayList< String> words = getKPC(str);
    System.out.println(words);
  }
  static String[] codes = {".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx",
                           "yz"
                          };                                                        //#

  public static ArrayList< String> getKPC(String str) {
    if (str.length() == 0) {                                  //1
      ArrayList< String>bres = new ArrayList< >();
      bres.add("");
      return bres;
    }

    char ch = str.charAt(0);                                      //2
    String ros = str.substring(1);                                //3
    ArrayList< String>rres = getKPC(bc);                           //4
    ArrayList< String> mres = new ArrayList< >();

    String codeforch = codes[ch - "0"];                           //5

    for (int i = 0; i < codeforch.length(); i++) {
      char chcode = codeforch.charAt(i);
      for (String val : rres) {                                   //6
        mres.add(chcode + val);
      }
    }
    return mres;                                                  //7
  }

}





*/