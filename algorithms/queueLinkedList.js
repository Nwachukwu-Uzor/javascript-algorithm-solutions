class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.traverse();
  }
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
      this.first = null;
    }

    return this.traverse()
  }
  peek() {
    return this.first;
  }

  traverse() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const items = [];
    let current = this.first;
    while (current) {
      items.push(current.data);
      current = current.next;
    }
    return items;
  }
}

const queue = new Queue();

console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4))
console.log(queue.dequeue());
console.log(queue);