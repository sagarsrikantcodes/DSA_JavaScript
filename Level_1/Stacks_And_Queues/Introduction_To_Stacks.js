/*

Introduction To Stacks

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

// Creating a Stack object 
let stack = new Stack();

// Testing isEmpty() and pop() function on an empty stack 
// Returns false 
console.log(stack.isEmpty());
// returns Underflow 
console.log(stack.pop());

console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [] => undefined 0
stack.push(10);
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [10] => 10 1
stack.push(20);
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [10, 20] => 20 2
stack.push(30);
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [10, 20, 30] => 30 3
stack.push(40);
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [ 10, 20, 30, 40 ] => 40 4
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size());// 10,20,30,40 => 40 4
console.log(stack.pop());
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10,20,30 => 30 3
console.log(stack.pop());
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10, 20 => 20 2
console.log(stack.pop());
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10 => 10 1
console.log(stack.pop());
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [] => undefined 0
console.log(stack.pop());







