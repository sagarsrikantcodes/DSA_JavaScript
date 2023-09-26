/*
Print Subsequence

Algorithm:
1. The input string is passed as the question and since this question is unanswered, a blank string is passed as the answer.

2. Base Case: If the ques length reaches 0, then we print the answer and return the function.

3. We separate the first element i.e. "a" of the ques string and store it in char ch.

4. Next we store the remaining part of the ques string i.e "bc" in the string roq.

5. The function printSS is recursively called on roq i.e. bc ,which will provide us all the subsequences with the first character ch added to each of the answers.

6. The function printSS is recursively called on roq i.e. bc ,which will provide us all the subsequences with the first character ch not added to any of the answers. We depict this by adding a blank string to the answers.

Analysis
Time Complexity :
O(2n)

This time complexity is exponential because for each state, 2 recursion calls are made.

SPACE COMPLEXITY :
O(1)

As no extra space is required, therefore space complexity is constant. However, if we include the space used in the recursive stack then the space complexity is O(n).

The time and space complexity of the provided code can be analyzed as follows:

Time Complexity:

The function uses recursion to explore all possible subsequences of the input string ques.
For each character in ques, the function makes two recursive calls: one including the character in the subsequence and one without it.
The number of recursive calls doubles with each character processed.
Therefore, the time complexity of this code is O(2^n), where n is the length of the input string ques.
In other words, the code has exponential time complexity because it explores all possible combinations of characters in the input string.

Space Complexity:

The space complexity is determined by the stack space used for the recursive calls.
At each recursive call, some space is allocated on the call stack to store the function's local variables, including char, restOfString, and ans.
The maximum depth of the recursion is equal to the length of the input string ques.
Therefore, the space complexity of this code is O(n), where n is the length of the input string ques.
In summary:

Time Complexity: O(2^n)
Space Complexity: O(n)
The code's time complexity makes it inefficient for large input strings, as the number of recursive calls grows exponentially with the input size.


*/

// Code with Implementation 

function printSS(ques, ans) {
  if (ques === "") { // 1
    console.log(ans);
    return;
  }

  let char = ques.charAt(0); // 2
  let restOfString = ques.substring(1); // 3
  printSS(restOfString, ans + ""); // 4
  printSS(restOfString, ans + char); // 5
}

printSS("abc", "");