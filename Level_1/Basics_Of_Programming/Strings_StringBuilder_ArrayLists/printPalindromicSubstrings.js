/*
Print All Palindromic Substrings

Problem Discussion :
Given a string, print all palindromic substrings of it.
A substring of a string is a contiguous subsequence of that string, i.e. it can be formed by deleting 0 or more characters from start and end of the string.
For a string str = "abbc", a substring can be "a", "ab", "abb", etc. but "abc" cannot be a substring, as it is not contiguous. Also, "ba" is not a substring, as the order of characters is changed.
A string is said to be a palindrome if the string read from left to right is equal to the string read from right to left. For example), strings "abba", "a", "aba", etc are palindromes, but strings "ab", "abc", etc. are not palindromes.

Pseudo Code:
isPalindrome(string) :

Initialize two pointers i and j as 0 and string.length - 1 respectively.
Now, run a loop until i < j:
If character at index i is not equal to character at index j, then return false.
Increment i pointer by 1 and decrement j pointer by 1
Return true.
solution(string):

Run a outer loop i from 0 to str.length - 1
Run a inner nested loop j from i + 1 to str.length
Check if str.substring(i, j) is Palindrome. If yes, then print the substring, else do nothing.

Analysis
Time Complexity :
Why O(n^3) Time?

We are running the outer loop from 0 to n-1 which takes O(n) and the inner loop from i to n-1, which will again take O(n).

Now, we are generating a substring from i to j, and checking whether it is a palindrome also takes O(j-i) = O(n) time.

Hence, the overall time complexity turns out to be O(n * n * n) = O(n^3) time.

SPACE COMPLEXITY :
O(n) auxiliary space is required as we are passing the substring from i to j to isPalindrome function.

*/

// Code with Implementation 

function isPalindrome(string) {
  let low = 0;
  let high = string.length - 1;

  while (low <= high) {
    if (string.charAt(low) !== string.charAt(high)) {
      return false;
    }

    low += 1;
    high -= 1;
  }

  return true;
}

function displayPalindromicSubstrings(string) {

  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j < string.length + 1; j += 1) {
      let subStr = string.slice(i, j);
      if (isPalindrome(subStr)) {
        console.log(subStr);
      }
    }
  }

}

displayPalindromicSubstrings("abccbc");