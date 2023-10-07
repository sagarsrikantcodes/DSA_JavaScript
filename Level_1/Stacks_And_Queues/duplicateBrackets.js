/*
Duplicate Brackets

Problem:
  input: string 
  output: Boolean 

  rules: 
  Explicit Requirements:
  1. Must return true or false if there is a duplicate bracket present in the given string expression. 
  2. Assume that the expression is balanced. The opening and closing brackets match each other. 

  Implicit Requirements:
  1. If the given string is an empty string, return false. 

Example / Test Cases:
((a + b) + (c + d)) -> false
(a + b) + ((c + d)) -> true

Data Structures:
input: String
output: Boolean 
Function Execution: Stack data structure. 

High Level Thinking:
Since we are trying to find if the duplicate brackets are present in an expression. We can push the characters of the string(I.e., opening brackets and other mathematical operations) onto the stack but when closing bracket is encountered in an expression continue popping the characters in the stack as long as the top of the stack is not equal to the opening bracket. As soon as the top of the stack is equal to the opening bracket, remove the opening bracket as well. 
If the stack is NOT empty, duplicate bracket exist, return true.
If the stack is empty, duplicate bracket does not exisr, return false.

Algorithm:
1. Implement the stack class from the previous lesson. 
2. Iterate through the given string. 
  - Declare and Create a character, ch at index, idx. 
  - If the character, ch is NOT equal to the closing bracket ")" , push the character, ch onto the stack. 
  - ELse, 
    - If the top most stack element is an opening bracket, It is a redudant bracket, return true. 
    - Continue popping characters from the stack as long as  the top most element of the stack is NOT equal to the opening bracket. 
    - As soon as the top of the stack is equal to the opening bracket, pop the top of the stack. 
3. If the stack is NOT empty, return true.
4. Return false.

Pseudo Code
We can use the stack data structure to check whether there exists at least one character exclusively between each pair of brackets or not.

Initialize an empty stack of characters st.
Iterate over the expression string and pick the current character at index i.
If the current character is not ')', {can be any alphabet, digit, '(' opening bracket or arithmetic operator}, then:
Push the character into the stack
Else, {current character is ')'}
Check if the character at the top of the stack is '(' or not.
If it is '(', then return true (as pair of redundant bracket is found)
Else, (there is at least 1 character b/w the current pair)
Pop characters from the stack until you get '(' opening bracket at the top.
Pop the opening bracket '(' as well.
If all characters are traversed, and no duplicate bracket is found, then return false.
Q) You may think that we are not even checking whether the stack is empty or not before checking whether the top element is '(' or not. But why so?

R) This is because the input expression is balanced. It means before every ')' closing bracket, there will be at least one '(' opening bracket for sure. Hence, we cannot get a string like ")(", because this is not balanced.

Analysis
This is a very crucial point where a lot of readers get confused. Please read it carefully and try to focus on the analysis.

Time Complexity :
We are traversing the expression string once.
Now, you can see that inside the for loop, whenever we encounter ')' character, we are running a while loop which will run until '(' is encountered at top of stack. So, should not time complexity be O(n * n) as there is a while loop nested inside a for loop?
No, the time complexity is O(n) only. Let us figure out why it is so.
For each character in the expression string (other than the closing bracket), we are pushing it in the stack only once.
Hence, although there is a nested while loop inside a for loop, the number of characters that will get popped out of the stack are not equal to the size of string in each iteration.
We will pop n characters from the stack at maximum during the entire for loop and not single iteration of for loop.
Thus, we are pushing and popping each character only once, thus the time complexity will be O(2*n) = O(n) only.
SPACE COMPLEXITY :
We are using the stack data structure, which can take space equal to the number of characters in the expression string, i.e. equal to the size of the string, in the worst case, hence O(n) auxiliary space is required.

*/

// Constructing Stack classn using OOP technique
class Stack {
  // Array is used to implement stack 
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // size()
  // isEmpty()
  // printStack()

  // push() function 
  push(element) {
    // push element into the items
    this.items.push(element);
  }

  // pop() function 
  pop() {
    // Returns a string "Underflow" if the stack is empty. 
    // Removes an element from the stack. 
    // Returns the removed element. 
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // peek() function 
  peek() {
    // Return the top most element in the stack, but doesn't 
    // delete it. 
    return this.items[this.items.length - 1];
  }

  // size() function 
  size() {
    // Returns the size of the stack 
    return this.items.length;
  }

  // isEmpty() method 
  isEmpty() {
    // Returns true if the stack is empty 
    return this.items.length === 0;
  }

  // printStack() method 
  printStack() {
    // Prints the elements of a stack 
    let res = "";
    for (let idx = 0; idx < this.items.length; idx += 1) {
      res += this.items[idx] + " ";
    }

    return res;
  }
}



function hasDuplicateBracket(str) {
  let stack = new Stack();

  for (let idx = 0; idx < str.length; idx += 1) {
    let ch = str.charAt(idx);
    if (ch !== ")") {
      stack.push(ch);
    } else {
      if (stack.peek() === "(") {
        return true;
      }

      while (stack.peek() !== "(") {
        stack.pop();
      }

      stack.pop();
    }
  }

  if (stack.size() !== 0) {
    return true;
  }

  return false;
}

console.log(hasDuplicateBracket("((a+b)+(c+d))")); // false 
console.log(hasDuplicateBracket("(a+b)+((c+d))")); // true