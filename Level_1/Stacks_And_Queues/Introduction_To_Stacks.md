# Introduction To Stacks

* Until now we are aware about the recursive call stack and the function call stack, and know about some principles on which stack works. We will discuss about some of the principles on which stack works. 

## Definition:
* Stack is a linear data structure which follows a LIFO (Last In, First Out) policy for doing various operations. 

* Q) What are linear data structures?
	* Data structure where data elements are arranged linearly/sequentially, is called a linear data structure. In linear data structure, we can traverse all the data items in a single pass. Until now we have encountered data structures such as Arrays, ArrayList or String. Stack is also a linear data structure. 

* Q) What is FILO(First In Last Out) or LIFO(Last In First Out) order?
	* In a **queue**, the element deleted is always the one that has been in the set for the longest time: the queue implements a **_first-in, first-out_**, or **_FIFO_**, policy. 
	* In a **stack**, the element deleted from the set is the one most recently inserted: the stack implements a **_last-in, first-out_**, or **_LIFO_**, policy.

## Implementation of a Stack Class Using Array in JavaScript
* Let us see an example of an stack class using array in Javascript 

```javascript
// Stack class
 
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

}


```

* As we can see we have created a skeleton of a stack class which contains a constructor in which we declare an array to implement stack. Hence, with the creation of an object of a stack class this constructor would be called automatically. 

### **Now let's see implementation of each method:**

* **Push:**Adds an element to the stack

```javascript
// push function
push(element) {
	// push element into the items 
	this.items.push(element); 
}

```

* This method adds an **element** at the top of the stack. 

* **Pop()**: Removes an element from the stack, if the function is called on an empty stack it indicates "Underflow"

```javascript
// pop function
pop() {
	// Return the top most element in the stack 
	// and remove it from the stack 
	// Print underflow if the stack is empty. 
	if (this.items.length === 0) {
		return "Underflow";
	} 
	return this.items.pop();
}

```

* This method returns the topmost element of the stack and removes it. Returns "Underflow" when called on an empty stack. 

* **Peek()** : returns the top most elements in the stack, but doesn't delete it. 

```javascript

// peek function 
peek() {
	// Return the top most element in the stack without deleting it. 
	return this.items[this.items.length - 1];
}


```
Returns the topmost element without removing it from the stack. 

* **size()** : returns the size of the stack. 

```javascript
// size() function 
size() {
	// Return the size of the stack. 
	return this.items.length;

}
```

### Helper methods

There are three basic operation performed by a Stack. Using helper method can be useful when working with the stack. 
* **isEmpty()** : return true if the stack is empty. 

```javascript 
// isEmpty() function
isEmpty() {
	// return true if the stack is empty
	return this.items.length === 0;

}

```

Returns true if the stack is empty. 

* **printStack()** : This method returns a stack in the form of an array. 

```javascript

// printStack() function

printStack() {
	console.log(this.items);
}


```

### **Sample Functions**
In this example we would create an object of stack class and test few functionalities of a Stack data structure. 

```javascript
// Creating object of stack class 
let stack = new Stack();

// Testing isEmpty() and pop() on an empty stack 

// returns false 
console.log(stack.isEmpty());

// returns Underflow 
console.log(stack.pop()); 

// returns size of 0
console.log(stack.size());


```

Some more functions of stack class 

```javascript

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
stack.pop();
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10,20,30 => 30 3
stack.pop();
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10, 20 => 20 2
stack.pop();
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // 10 => 10 1
stack.pop();
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [] => undefined 0
stack.pop();
console.log(stack.printStack() + " => " + stack.peek() + " " + stack.size()); // [] => undefined 0

```

Once we are done with implementing and testig the stack class now we can use it for different applications. 






















