class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(item) {
    const newNode = new Node(item);
    // check if the stack is empty
    if (!this.top) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this.traverse();
  }
  pop() {
    if (this.length === 0) {
      throw new Error("Stack is empty");
    }
    const oldTop = this.top;
    this.top = oldTop.next;

    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return oldTop;
  }
  find(index) {
    if (index > this.length - 1) {
      throw new Error("Index out of bounds");
    }
    let current = this.top;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  isEmpty() {
    return this.length === 0;
  }
  traverse() {
    const items = [];
    let current = this.top;
    while (current) {
      items.push(current.data);
      current = current.next;
    }
    return items;
  }
}

const stack = new Stack();
console.log(stack.push(4));
console.log(stack.push(3));
console.log(stack.push(6));
console.log(stack.bottom);
console.log(stack.peek());
stack.pop();
stack.pop();
stack.pop();
