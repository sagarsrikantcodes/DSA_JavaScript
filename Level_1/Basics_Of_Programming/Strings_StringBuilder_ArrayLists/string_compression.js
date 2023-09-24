/*
String Compression

input: string = "wwwwaaadexxxxxx"

output:
s1 = wadex
s2 = w4a3dex6

Analysis
Time Complexity :
In both ways, we are traversing the input string once, hence the time complexity will be O(n).

SPACE COMPLEXITY :
If we take the space of the output string, then the solution is taking O(n) space. Although, if we ignore the space taken by the output, (which we generally do), the solution is said to take O(1) auxiliary space.

*/

function getCompressedString1(string) {
  let res = "" + string.charAt(0);

  for (let i = 1; i < string.length; i += 1) {
    while (string.charAt(i - 1) === string.charAt(i)) {
      i += 1;
    }
    res += string.charAt(i);
  }

  return res;
}

function getCompressedString2(string) {
  let count = 0;
  let left = 0, right = 0;
  let res = "";

  while (right < string.length) {
    while (string.charAt(left) === string.charAt(right)) {
      count += 1;
      right += 1;
    }

    if (right - left + 1 !== 1 && count !== 1) {
      res += string.charAt(left);
      res += count;
    } else {
      res += string.charAt(left);
    }

    count = 1;
    left = right;
    right += 1;
  }

  return res;
}


console.log(getCompressedString1("wwwwaaadexxxxxx")); // "wadex"
console.log(getCompressedString2("wwwwaaadexxxxxx")); // "w4a3dex6"



