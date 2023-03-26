class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  transverse() {
    const data = [];
    let current = this.head;
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    return data;
  }

  getDataAtIndex(index) {
    if (index > this.length - 1 || index < 0) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insert(data, index) {
    if (index > this.length - 1 || index < 0) {
      throw new Error("Index out of bounds");
    }

    const currentPrev = this.getDataAtIndex(index - 1);
    const currentNext = currentPrev.next;
    const newNode = new Node(data);
    currentPrev.next = newNode;
    newNode.next = currentNext;
    this.length++;
  }

  delete(index) {
    if (index > this.length - 1 || index < 0) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.length - 1) {
      const currentPrev = this.getDataAtIndex(index - 1);
      this.tail = currentPrev;
      currentPrev.next = null;
    } else {
      const currentPrev = this.getDataAtIndex(index - 1);
      const nodeToDelete = currentPrev.next;
      const newNextForCurrentPrev = nodeToDelete.next;
      currentPrev.next = newNextForCurrentPrev;
    }

    this.length--;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}

class StackWithLinkedList {
  constructor(data) {
    this.storage = new LinkedList(data);
  }

  push(item) {
    this.storage.append(item);
    return this.storage.length;
  }

  pop() {
    const lastItem = this.storage.getTail();
    this.storage.delete(this.storage.length - 1);
    return lastItem.data;
  }

  
}
