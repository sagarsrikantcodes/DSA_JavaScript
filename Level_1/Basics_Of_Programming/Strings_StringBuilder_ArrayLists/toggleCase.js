/*
Toggle Case

String With Difference Of Every Two Consecutive Characters

1. You are given a string that contains only lowercase and uppercase alphabets. 
2. You have to form a string that contains the difference of ASCII values of every two consecutive characters between those characters.
   For "abecd", the answer should be "a1b3e-2c1d", as 
   'b'-'a' = 1
   'e'-'b' = 3
   'c'-'e' = -2
   'd'-'c' = 1

Input:
string = pepCODinG

Output:
string = p-11e11p-45C12O-11D37i5n-39G

*/

function toggleCase(string) {
  let res = "";

  for (let i = 0; i < string.length; i += 1) {
    let char = string.charAt(i);
    if (i + 1 < string.length) {
      res += (string.charAt(i) + (string.charCodeAt(i + 1) - string.charCodeAt(i)));
    }
  }

  res += string.charAt(string.length - 1);
  return res;
}

console.log(toggleCase("pepCODinG")); // p-11e11p-45C12O-11D37i5n-39G

