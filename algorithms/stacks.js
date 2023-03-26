class Stack {
  constructor(data) {
    this.storage = [];
    this.storage.push(data);
  }
  push(data) {
    this.storage.push(data);
    return this.storage;
  }
  pop() {
    this.storage.shift();
    return this.storage;
  }

  peek() {
    if (this.storage.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.storage[this.storage.length - 1];
  }
  lookup(index) {
    if(index > this.storage.length - 1) {
        throw new Error("Invalid key for lookup")
    }
    return this.storage[index]
  }
}

const myStack = new Stack(12);
console.log(myStack.push(11));
console.log(myStack.push(9));
console.log(myStack.push(1));
console.log(myStack.peek())
console.log(myStack.lookup(2))

