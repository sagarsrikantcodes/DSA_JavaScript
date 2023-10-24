// Linked List - Introduction 
/*
Arrays are continuous and continuous memory spaces are not available in this heap.

LINKED LISTS

The list is "linked" despite that the memory is not continuous. The small squares with 2 compartments. They are called nodes. 

There are 2 parts in a node: Data and Address of the next node. 

Also the stack stores the address of the first element of the linked list i.e., 4K. 

Hence, we conclude that a linked list is a non-continuous type of data structure. This means that a Linked List utilizes space when there is a fragmented memory. 

Disadvantage of Linked List over Arrays in terms of memory:

- Even though it is advantageous to use Linked Lists for space conservation in heap, we notice that since each node stores 2 values: data and address, therefore each node requires 4bytes + 4 bytes => 8 bytes of memory. The memory used in arrays for each element was only 4 bytes. Hence, the space of linked lists is noticed to be more. 

*/

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
      this.head = null;
      this.tail = null;
      this.size -= 1;
    } else {

      for (let temp = this.head; temp !== null; temp = temp.next) {
        if (temp.next === this.tail) {
          temp.next = null;
          this.tail = temp;
        }
      }

      this.size -= 1;
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

let list = new LinkedList();
/*
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
testList(list);
*/

/*
Output:

10
20
30
40
50
5
50

*/
/*
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.display(); // 10 20 30
console.log(list.getSize()); // 3
list.addLast(40);
list.addLast(50);
list.display(); // 10 20 30 40 50
console.log(list.getSize()); // 5
*/
/*
Analysis
Time Complexity:
Size: The time complexity of the size method is O(1) as we are just returning the size of the linked list.
Display: The time complexity of display is O(n) as we are traversing the entire linked list of n elements.
Space Complexity:
The space complexity of the above methods is O(1) as we have not used any extra space for any of the above methods.

*/
/*
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.display();
list.removeFirst();
console.log(list.getSize());
list.addLast(40);
list.addLast(50);
list.removeFirst();
list.display();
console.log(list.getSize());
list.removeFirst();
list.removeFirst();
list.removeFirst();
list.removeFirst();
*/

/*
Output:

10 20 30 
2
30 40 50 
3
List is empty

*/
/*
list.addLast(10);
console.log(list.getFirst());
list.addLast(20);
list.addLast(30);
console.log(list.getFirst());
console.log(list.getLast());
console.log(list.getAt(1));
list.addLast(40);
console.log(list.getLast());
list.addLast(50);
list.removeFirst();
console.log(list.getFirst());
list.removeFirst();
list.removeFirst();
console.log(list.getAt(3));
list.removeFirst();
list.removeFirst();
console.log(list.getFirst());
*/

/*
Outputs:

10
10
30
20
40
20
Invalid arguments
-1
List is empty
-1

Complexity Analysis:

getFirst
- Time Complexity = O(1)
- Space Complexity = O(1)

getLast
- Time Complexity = O(1)
- Space Complexity = O(1)

getAt
- Time Complexity = O(N)
- Space Complexity = O(1)

*/
/*
list.addFirst(10);
console.log(list.getFirst());
list.addFirst(20);
console.log(list.getFirst());
console.log(list.getLast());
list.display();
console.log(list.getSize());
list.addLast(40);
console.log(list.getLast());
list.addLast(50);
list.addFirst(30);
list.removeFirst();
console.log(list.getFirst());
list.removeFirst();
list.removeFirst();
console.log(list.getAt(3));
list.display();
console.log(list.getSize());
list.removeFirst();
list.removeFirst();
console.log(list.getFirst());
*/
/*
Output:

10
20
10
20 10 
2
40
20
Invalid arguments
-1
40 50 
2
List is empty
-1

Complexity Analysis for addFirst Function:

Time Complexity:
The time complexity of the above solution is O(1) as we are just creating a new node and inserting it at the beginning of the linked list. And we are not traversing the list.

Space Complexity:
The space complexity of the above solution is O(1) as we have not used any extra memory for our work.

*/
/*
list.addFirst(10);
console.log(list.getFirst()); // 10
console.log(list);
list.addAt(0, 20);
console.log(list);
console.log(list.getFirst()); // 20
console.log(list.getLast()); // 10
list.display(); // 20 10
console.log(list.getSize()); // 2
list.addAt(2, 40);
console.log(list);
list.display(); // 20 10 40
console.log(list.getLast()); // 40
console.log(list.getAt(1));
list.addAt(1, 50);
list.display(); // 20 50 10 40 
list.addFirst(30);
list.display(); // 30 20 50 10 40 
list.removeFirst();
list.display(); // 20 50 10 40
console.log(list.getFirst()); // 20
list.removeFirst();
list.display(); // 50 10 40
list.removeFirst();
list.display(); // 10 40
list.addAt(2, 60);
list.display(); // 10 40 60
console.log(list.getSize()); // 3
list.removeFirst();
list.display(); // 40 60 
list.removeFirst();
list.display(); // 60
console.log(list.getFirst()); // 60
*/
/*
Complexity Analysis for Add at Index in Linked List :

Time Complexity:
We are running a single loop to idx-1, at the worst case it might be size-1, so the time complexity will be O(n) linear.

Space Complexity:
We are not using any auxiliary space other than a single new node, So the space complexity is constant as well.

*/
/*
list.addFirst(10);
list.display(); // 10
console.log(list.getFirst()); // 10 
list.addAt(0, 20);
list.display(); // 20 10 
console.log(list.getFirst()); // 20 
console.log(list.getLast()); // 10
list.display(); // 20 10
console.log(list.getSize()); // 2
list.addAt(2, 40);
list.display(); // 20 10 40
console.log(list.getLast()); // 40
list.addAt(1, 50);
list.display(); // 20 50 10 40
list.addFirst(30);
list.display(); // 30 20 50 10 40
list.removeFirst();
list.display(); // 20 50 10 40 
console.log(list.getFirst()); // 20
list.display(); // 20 50 10 40
list.removeLast();
list.display(); // 20 50 10
list.removeLast();
list.display(); // 20 50
list.addAt(2, 60);
list.display(); // 20 50 60
console.log(list.getSize()); // 3
list.removeFirst();
list.display(); // 50 60
list.removeLast();
list.display(); // 50
console.log(list.getFirst()); // 50
*/
/*
list.addFirst(10);
console.log(list.getFirst());
list.addAt(0, 20);
console.log(list.getFirst());
console.log(list.getLast());
list.display();
console.log(list.getSize());
list.addAt(2, 40);
console.log(list.getLast());
list.addAt(1, 50);
list.addFirst(30);
list.removeAt(2);
console.log(list.getFirst());
list.removeAt(0);
list.removeAt(1);
list.addAt(2, 60);
list.display();
console.log(list.getSize());
list.removeAt(0);
list.removeAt(1);
console.log(list.getFirst());
*/

/*

Analysis for Remove at index, idx in Linked list
Time Complexity:
O(n)

A 'for' loop has been used therefore the time complexity becomes O(n).

Space Complexity:
O(1)

Since no extra space has been used therefore the space complexity becomes O(1).

*/
/*
list.addFirst(10);
list.addFirst(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addFirst(60);
list.removeAt(2);
list.display(); // 60 20 30 40 50
list.reversePI();
list.display(); // 50 40 30 20 60 
*/

/*
addFirst 10
addFirst 20
addLast 30
addLast 40
addLast 50
addFirst 60
removeAt 2
display
reversePI
display
quit



*/

list.addFirst(10);
list.addFirst(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addFirst(60);
list.removeAt(2);
list.display(); // 60 20 30 40 50
list.reverseDI();
list.display(); // 50 40 30 20 60 

/*
Analysis for reverseDI()

Time Complexity:
O(n2)

The getNodeAt() function is a linear function and the number of calls to that function will be at max n. Because we will do n/2 calls for the left node and n/2 for the right node. So the total complexity is n*O(n) = O(n2)

Space Complexity:
O(1)

We are not using any extra space so the space complexity will remain constant.

*/

