// class initializing the values of nodes in a LL
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // for initializing the head, tail and length of LL
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert at first
  push(val) {
    // create a new node
    var newNode = new Node(val);

    // check if empty list
    if (!this.head) {
      // set newNode to be the head and tail as it is the only element in the list
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if already elements present in list, then add newNode to the back of the list
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment length by 1
    this.length++;

    // return list
    return this;
  }

  // remove last element
  pop() {
    // check for null
    if (!this.head) return undefined;

    // if not null, then define current and set our newTail to current
    var current = this.head;
    var newTail = current;

    // loop until last element
    while (current.next) {
      // set newTail to be the second last element
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // this function returns everything in boolean

    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;

    this.length--;
    return removed;
  }

  print() {
    var arr = [];
    var current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push(50);
list.push(70);
list.push(100);
