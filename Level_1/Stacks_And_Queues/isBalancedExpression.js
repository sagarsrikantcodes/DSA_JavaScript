
/*

Introduction To Stacks

https://github.com/sagarsrikantcodes/DSA_JavaScript/blob/main/Level_1/Stacks_And_Queues/Introduction_To_Stacks.md

Arrays have fixed size. 
ArrayLists are dynamic arrays. 
Strings contains characters. 

Stacks are like dynamic arrays with some limitations. 
- In stacks addition, removal and view / peek is only from the top. 
Functions in Stack:
1. push()
2. peek() or top()
3. pop()
4. size() 


*/
/*
// Peek function in Stack 
function peek(stack) {
  return stack[stack.length - 1];
}

// Size of a Stack 
function size(stack) {
  return stack.length;
}

let stack = new Array();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [] => undefined 0
stack.push(10);
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [10] => 10 1
stack.push(20);
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [10, 20] => 20 2
stack.push(30);
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [10, 20, 30] => 30 3
stack.push(40);
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [ 10, 20, 30, 40 ] => 40 4
console.log(stack + " => " + peek(stack) + " " + size(stack));// 10,20,30,40 => 40 4
stack.pop();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // 10,20,30 => 30 3
stack.pop();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // 10, 20 => 20 2
stack.pop();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // 10 => 10 1
stack.pop();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [] => undefined 0
stack.pop();
console.log(stack + " => " + peek(stack) + " " + size(stack)); // [] => undefined 0
*/

// Constructing Stack classn using OOP technique
class Stack {

  // Constructor 
  constructor() {
    this.items = [];
  }
  // Pop Method
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    } else {
      return this.items.pop();
    }
  }

  // Peek Method 
  peek() {
    return this.items[this.items.length - 1];
  }

  // Push Method 
  push(element) {
    this.items.push(element);
  }

  // Size 
  size() {
    return this.items.length;
  }

  // Helper Functions
  // isEmpty Method
  isEmpty() {
    return this.items.length === 0;
  }

  // printStack
  printStack() {
    console.log(this.items);
  }
}

// Balanced Brackets

/*

1. You are given a string exp representing an expression.
2. You are required to check if the expression is balanced i.e. closing brackets and opening brackets match up well.

e.g.
[(a + b) + {(c + d) * (e / f)}] -> true
[(a + b) + {(c + d) * (e / f)]} -> false
[(a + b) + {(c + d) * (e / f)} -> false
([(a + b) + {(c + d) * (e / f)}] -> false

Input Format
A string str

Output Format
true or false

*/

/*
init a bracketMap 

 iterate through the string 
  if the current character is not a }])
    add to the stack 
  else 
    if the top of the stack is equal to ( OR { OR [, return false.
    while the current top element is not a ({[
      pop from the stack 
      
  if the current element does not match 
      - return false 
   
  pop from the stack 

if stack is emtpy return true  else false 
*/

function isBalanced(str) {
  let stack = new Stack();
  let mappingChars = { ']': '[', ')': '(', '}': '{' };

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str.charAt(idx);
    if (char !== ']' && char !== '}' && char !== ')') {
      stack.push(char);
      // console.log(stack);
    } else {
      if (stack.peek() === '[' || stack.peek() === '(' || stack.peek() === '{') {
        return false;
      }
      // console.log(stack.peek(), "PEEK");

      while (stack.peek() !== '[' && stack.peek() !== '{' && stack.peek() !== '(') {
        stack.pop();
      }

      if (mappingChars[char] !== stack.peek()) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}
// []
// function isBalanced(input) {
//   const hash = {'[': ']', '(': ')', '{': '}'};
//   const stack = new Stack();

//   for (let char of input) {
//     if (char === ']' || char === ')' || char === '}') {
//       while (true) {
//         if (!hash.hasOwnProperty(stack.peek())) {
//           stack.pop();
//         } else {
//           if (hash[stack.peek()] !== char) return false;
//           stack.pop();
//           break;
//         }
//       }
//     } else {
//       stack.push(char);
//     }
//   }

//   return stack.isEmpty();
// }
// // CHAR: )
// STACK: [{ 
console.log(isBalanced("[(a + b) + {(c + d) * (e / f)}]")); // true
console.log(isBalanced('[(a + b) + {(c + d) * (e / f)]}'));// -> false
console.log(isBalanced('[(a + b) + {(c + d) * (e / f)}'));// -> false
console.log(isBalanced('([(a + b) + {(c + d) * (e / f)}]'));// -> false