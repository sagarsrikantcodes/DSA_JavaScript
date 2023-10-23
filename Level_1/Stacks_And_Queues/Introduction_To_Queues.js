// Introduction To Queues

/*
Definition:
Queue is a linear data structure which follows a FIFO (First In First Out) order for doing various operations.

Q) What are linear data structures?

R) Data structure where data elements are arranged sequentially or linearly, is called a linear data structure. In linear data structure, we can traverse all the data items in a single pass. Until now, all the data structures you have learnt are linear data structures only, whether it is Array, Arraylist or String. Stack is also a linear data structure.

Q) What is FIFO (First In First Out) order?

R) Let us try to get the meaning of FIFO using an example. Consider a "queue" of people standing at an Aadhar Verification Center:

The first person who had joined the queue was the old lady with the stick. And the last person who joined the queue was a girl with a yellow document. Now, the old lady will get her aadhaar verified first, then the businessman, .. and at last the lady with the yellow document.

So, we can say that the first person who first joined the queue was served first, and the last person joining the queue will be served last ( it is nothing but first come first serve). This ordering of elements is known as FIFO (First In First Out).

Operations
add(ele):Enqueues/adds an item ele in the queue(to the rear end of the queue).
If the queue is full, then it is said to be a Queue Overflow condition. Queue overflow can occur when there is no more heap memory, which can be allocated to our queue.
remove(): Dequeus/removes an item from the queue and returns the front element which is removed.
The items are popped in the same order in which they are pushed, i.e. the item which is pushed first is also the one which will be removed first.
If the queue is empty, then it is said to be a Queue Underflowcondition. Hence, trying to remove an element from an empty queue (size = 0), will give a run-time error.
peek() (front()in C++) Returns the front element of the queue.
Note: It will give a run-time error, if there is no element present in the queue, i.e. the size of the queue is zero.
size(): Returns the number of elements present in the queue.
All these operations: add, remove, peek and size are constant operations, i.e. the time complexity is O(1) per call.

Hence, if we add n items to the queue (i.e. call add for n times), overall time complexity will be n * O(1) = O(n), and similarly for any other operation like removing n times from the queue.

Basic Operations on Queue: 
enqueue(): Inserts an element at the end of the queue i.e. at the rear end.

dequeue(): This operation removes and returns an element that is at the front end of the queue.

front(): This operation returns the element at the front end without removing it.

rear(): This operation returns the element at the rear end without removing it.

isEmpty(): This operation indicates whether the queue is empty or not.

isFull(): This operation indicates whether the queue is full or not.

size(): This operation returns the size of the queue i.e. the total number of elements it contains.  

*/
/*
// Implementation of Queue data structure using Arrays in JavaScript

class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

*/

/*
// Implementation of Queue Data Structures using Objects in JavaScript

*/

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear += 1;
  }

  dequeue() {
    const removedItem = this.items[this.front];
    delete this.items[this.front];
    this.front += 1;
    return removedItem;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear === 0;
  }

  queueItems() {
    let res = "";

    for (let i = this.front; i < this.rear; i += 1) {
      res += this.items[i] + " ";
    }

    return res;
  }
}

const queue = new Queue();
/*
queue.enqueue(10);
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.enqueue(20);
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.enqueue(30);
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.enqueue(40);
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.dequeue();
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.dequeue();
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.dequeue();
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
queue.dequeue();
console.log(queue.queueItems() + " -> " + queue.peek() + " " + queue.size());
*/

/*

Output:

10  -> 10 1
10 20  -> 10 2
10 20 30  -> 10 3
10 20 30 40  -> 10 4
20 30 40  -> 20 3
30 40  -> 30 2
40  -> 40 1
 -> undefined 0

*/

/*

Applications
Queue can be used for various CPU scheduling algorithms like First Come First Serve (FCFS) scheduling algorithm, etc.
Queue is used in networking fields like in routers/switches, mail queues, etc.
Queue data structure is used for BFS tree traversals.
In this section, we will apply our knowledge of queues to solve various problems including some of the applications stated above.

Q) What are similarities and differences between stack and queue data structures?

Similarities -
Both are linear data structures.
Elements can be inserted from one end only. (not taking deque into account).
Both stack and queue can be implemented using either arrays or linked lists.
Stacks can be implemented using 2 queues and queues can be implemented using 2 stacks.

Differences -
Stack follows LIFO (or FILO) order, whereas queue follows FIFO order.
Insertion & Deletion are from the same end in stack, whereas they are from opposite ends in queue data structure.
Add & Remove operations are called push and pop for stack, whereas they are called enqueue & dequeue for queue.
Stack is used for DFS traversal whereas queue is used for BFS traversal.

*/

queue.enqueue(10);
console.log(queue.queueItems());
queue.enqueue(20);
console.log(queue.queueItems());
queue.enqueue(30);
console.log(queue.queueItems());
queue.enqueue(40);
console.log(queue.queueItems());
queue.enqueue(50);
console.log(queue.queueItems());
queue.enqueue(60);
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.queueItems());
console.log(queue.peek());

/*

Outputs:

10 
10 20 
10 20 30 
10 20 30 40 
10 20 30 40 50 
10 20 30 40 50 60 
10
10
20 30 40 50 60 
20
20
30 40 50 60 
30
30
40 50 60 
40
40
50 60 
50
50
60 
60
60

*/