// Linked List To Stack Adapter

class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add an element at the end of the list. 
  addLast(val) {
    let node = new Node(val);
    node.next = null;
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;
  }

  // size - Should return the number of elements in the linked list.
  getSize() {
    return this.size;
  }

  // display - Should print the elements of linked list from front to end. 
  display() {
    for (let temp = this.head; temp !== null; temp = temp.next) {
      // console.log(temp);
      process.stdout.write(temp.data + " ");
    }
    console.log();
  }

  // RemoveFirst - This function is required to remove the first element from the LinkedList. Also, if there is only one element, this should set head and tail to null. If there are no elements, this should print "List is empty"
  removeFirst() {
    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      this.size -= 1;
    } else if (this.getSize() === 0) {
      console.log("List is empty");
      return;
    } else {
      this.head = this.head.next;
      this.size -= 1;
    }
  }

  /*
  Get Value in Linked List 
  3. You are required to complete the body of getFirst, getLast and getAt function 
3.1. getFirst - Should return the data of first element. If empty should return -1 and print "List is empty".
3.2. getLast - Should return the data of last element. If empty should return -1 and print "List is empty".
3.3. getAt - Should return the data of element available at the index passed. If empty should return -1 and print "List is empty". If invalid index is passed, should return -1 and print "Invalid arguments".

  */

  getFirst() {
    if (this.getSize() === 0) {
      console.log("List is empty");
      return -1;
    }

    return this.head.data;
  }

  getLast() {
    if (this.getSize() === 0) {
      console.log("List is empty");
      return -1;
    }

    return this.tail.data;
  }

  getAt(idx) {
    if (this.getSize() === 0) {
      console.log("List is empty");
      return -1;
    } else if (idx < 0 || idx >= this.getSize()) {
      console.log("Invalid arguments");
      return -1;
    } else {
      let temp = this.head;
      console.log(temp);
      let res;
      for (let i = 0; i < idx + 1; i += 1) {
        if (i === idx) {
          res = temp.data;
          break;
        }
        temp = temp.next;
      }


      return res;
    }
  }

  /*
  You are required to complete the body of addFirst function. This function should add the element to the beginning of the linkedlist and appropriately set the head, tail and size data-members.
  */

  addFirst(val) {
    let node = new Node(val);

    if (this.getSize() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  /*
  You are required to complete the body of addAt function. This function should add the element at the index mentioned as parameter. If the idx is inappropriate print "Invalid arguments".

  */

  addAt(idx, val) {
    // Get the current node at index, idx. 
    // Put the next node of newly created node of value, val equal to the current node at idx. 
    // if index, i is equal to idx - 1, then assign temp.next to the newly created node. 
    // Increment the size of the linked list. 
    // console.log("List size is " + list.getSize());

    if (idx === 0) {
      this.addFirst(val);
    } else if (idx === this.getSize()) {
      this.addLast(val);
    } else if (idx < 0 || idx > this.getSize()) {
      console.log("Invalid arguments");
    } else {
      let nodeAtIdx;
      let temp = this.head;
      for (let i = 0; i < this.getSize(); i += 1) {
        if (i === idx) {
          nodeAtIdx = temp;
          break;
        }

        temp = temp.next;
      }

      let newNode = new Node(val);
      newNode.next = nodeAtIdx;
      temp = this.head;
      for (let i = 0; i <= idx - 1; i += 1) {
        if (i === idx - 1) {
          temp.next = newNode;
        }
        temp = temp.next;
      }
      this.size += 1;
    }
  }

  /*
  You are required to complete the body of removeLast function. This function should remove the last element and update appropriate data members. If the size is 0, should print "List is empty". If the size is 1, should set both head and tail to null.
  */
  removeLast() {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    } else if (this.size === 1) {
      let res = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return res;
    } else {
      let res = this.tail;

      for (let temp = this.head; temp !== null; temp = temp.next) {
        if (temp.next === this.tail) {
          temp.next = null;
          this.tail = temp;
        }
      }

      this.size -= 1;
      return res;
    }
  }

  /*
  You are required to complete the body of removeAt function. The function should remove the element available at the index passed as parameter. If the size is 0, should print "List is empty". If the index is inappropriate print "Invalid arguments". Also consider the case when list has a single element.
  */

  removeAt(idx) {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    } else if (idx < 0 || idx >= this.size) {
      console.log("Invalid arguments");
      return;
    } else if (idx === 0 && this.size > 0) {
      this.removeFirst();
    } else if (this.size > 0 && idx === this.size - 1) {
      this.removeLast();
    } else {
      let temp = this.head;
      let nodeAtIdx;
      for (let i = 0; i < this.size; i += 1) {
        if (i === idx) {
          nodeAtIdx = temp;
          break;
        }
        temp = temp.next;
      }

      temp = this.head;
      for (let i = 0; i < this.size; i += 1) {
        if (i === idx - 1) {
          temp.next = nodeAtIdx.next;
          nodeAtIdx.next = null;
          break;
        }
        temp = temp.next;
      }
      // nodeAtIdx.next = null;
      this.size -= 1;
    }
  }
  /*
  You are required to complete the body of reverseDI function. The function should be an iterative function and should reverse the contents of linked list by changing the "data" property of nodes.
  */
  reversePI() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    // this.display(); // 60
    // Swap the head and tail nodes 
    [this.head, this.tail] = [this.tail, this.head];

  }

  getNodeAt(idx) {
    if (idx === 0) {
      return this.head;
    } else if (idx === this.size - 1) {
      return this.tail;
    } else {
      let temp = this.head;
      let res = null;

      for (let i = 0; i < this.size; i += 1) {
        if (i === idx) {
          res = temp;
          break;
        }
        temp = temp.next;
      }

      return res;
    }
  }

  reverseDI() {
    let left = 0;
    let right = this.size - 1;
    while (left < right) {
      [this.getNodeAt(left).data, this.getNodeAt(right).data] = [this.getNodeAt(right).data, this.getNodeAt(left).data];
      left += 1;
      right -= 1;
    }
  }
}
/*
function testList(list) {

  for (let temp = list.head; temp !== null; temp = temp.next) {
    console.log(temp.data);
  }

  console.log(list.size);

  if (list.size > 0) {
    console.log(list.tail.data);
  }

}
*/
// Linked List To Stack Adapter class 
/*
Here is the list of functions that you are supposed to complete
    3.1. push -> Should accept new data in LIFO manner
    3.2. pop -> Should remove and return data in LIFO manner. If not 
     available, print "Stack underflow" and return -1.
    3.3. peek -> Should return data in LIFO manner. If not available, print 
    "Stack underflow" and return -1.
    3.4. size -> Should return the number of elements available in the 
    stack

*/

class LinkedListToStackAdapter {

  constructor() {
    this.list = new LinkedList();
  }

  getSize() {
    return this.list.getSize();
  }

  push(val) {
    this.list.addLast(val);
  }

  pop() {
    if (this.list.getSize() === 0) {
      console.log("Stack underflow");
      return -1;
    }

    return this.list.removeLast().data;
  }

  peek() {
    if (this.list.getSize() === 0) {
      console.log("Stack underflow");
      return -1;
    }

    return this.list.getLast();
  }
}

/*
Sample Input

push 10
push 20
push 5
push 8
push 2
push 4
push 11
top
size
pop
top
size
pop
top
size
pop
top
size
pop
top
size
pop
top
size
pop
top
size
pop
quit

*/

let stack = new LinkedListToStackAdapter();
stack.push(10);
stack.push(20);
stack.push(5);
stack.push(8);
stack.push(2);
stack.push(4);
stack.push(11);
console.log(stack.peek()); // 11 
console.log(stack.getSize()); // 7 
console.log(stack.pop()); // 11
console.log(stack.peek()); // 4
console.log(stack.getSize()); // 6
console.log(stack.pop()); // 4 
console.log(stack.peek()); // 2
console.log(stack.getSize()); // 5
console.log(stack.pop()); // 2
console.log(stack.peek()); // 8
console.log(stack.getSize()); // 4
console.log(stack.pop()); // 8
console.log(stack.peek()); // 5
console.log(stack.getSize()); // 3
console.log(stack.pop()); // 5
console.log(stack.peek()); // 20
console.log(stack.getSize()); // 2
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
console.log(stack.getSize()); // 1
console.log(stack.pop()); // 10

