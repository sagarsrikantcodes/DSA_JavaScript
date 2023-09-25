/*
Get Subsequence

CODE DISCUSSION
Base Case: If the string length reaches 0, then a new ArrayList bres is created .A blank is added to it and it is returned. There is 1 subsequence of a blank string which is also a blank.
We separate the first element i.e. "a" of the given string and store it in char ch.
Next we store the remaining part of the given string i.e "bc" in the string ros.
The function gss is recursively called on ros and we have faith that it will provide us the subsequences for string "bc".
We create a new ArrayList mres in which the final output will be stored.
We apply a for loop for every subsequence of "bc" which is stored in rres and first add a blank before each of them eventually add it in our final ArrayList mres.
Again we apply a for loop for every subsequence of "bc" and add ch( i.e."a" in this case) before each of them and eventually add it in our final ArrayList mres.
At last, we return our final ArrayList mres where the output for "abc" is stored.

Time Complexity:

The time complexity of this code is O(2^n), where 'n' is the length of the input string str. This is because for each character in the input string, the function makes two recursive calls. In each recursive call, the string length decreases by 1. So, you have a binary tree-like recursion with a branching factor of 2 at each level. The total number of recursive calls is 2^n, where 'n' is the length of the input string.

Space Complexity:

The space complexity of this code is O(2^n) as well. This is because for each recursive call, the function creates new arrays rres and mres to store the results. The depth of the recursion tree is 'n', and at each level, the function creates new arrays. Therefore, the space complexity is O(2^n) to account for all the different combinations stored in these arrays.

In your example, when you call gss("abc"), it will generate and return all possible combinations of the characters "a", "b", and "c," resulting in an array with 2^3 = 8 combinations:

*/

function gss(str) {
  // Base case condition
  if (str.length === 0) {
    let bres = [];
    bres.push("");
    return bres;
  }

  let char = str.charAt(0);
  let restOfString = str.substring(1);

  let rres = gss(restOfString);
  let mres = [];

  rres.forEach(val => mres.push("" + val));
  rres.forEach(val => mres.push(char + val));
  return mres;
}

console.log(gss("abc"));

/*
Outputs
[
  '',   'c',   'b',
  'bc', 'a',   'ac',
  'ab', 'abc'
]


*/



/*
Code in Java

 public static ArrayList< String> gss(String str) {
    if (str.length() == 0) {
      ArrayList< String> bres = new ArrayList< >();           //1
      bres.add("");
      return base;
    }
    char ch = str.charAt(0);                                      //2
    String ros = str.substring(1);                                //3

    ArrayList< String> rres = gss(ros);                            //4
    ArrayList< String> mres = new ArrayList< >();                   //5
    for (String val : rres) {
      mres.add("" + val);                                       //6
    }
    for (String val : rres) {
      mres.add(ch + val);                                       //7
    }

    return mres;                                                  //8
  }

*/