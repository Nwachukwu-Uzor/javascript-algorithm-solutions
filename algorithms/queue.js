class Queue {
  constructor(data) {
    this.storage = [];
    this.storage.push(data);
    this.size = 1;
  }

  enqueue(data) {
    this.storage.push(data);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.storage.shift();
  }

  peek() {
    return this.storage[0]
  }
  traverse() {
    return this.storage;
  }
}

const queue = new Queue(3);
queue.enqueue(33);
queue.enqueue(7)
console.log(queue.storage)
queue.dequeue()
console.log(queue.traverse());
