class Queue {
  constructor() {
    this.arr = new Array(5);
    this.front = 0;
    this.rear = 0;
  }

  enque(x) {
    if (this.isFull()) {
      console.log("Queue is full !!");
      return;
    }
    this.arr[this.rear++] = x;
  }

  deque() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return -1;
    }
    const temp = this.arr[this.front++];
    if (this.front === this.rear) {
      this.front = this.rear = 0; // Reset when queue is empty
    }
    return temp;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }
    let output = '';
    for (let i = this.front; i < this.rear; i++) {
      output += this.arr[i] + " ";
    }
    console.log(output.trim());
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.rear === this.arr.length;
  }
}

// Main code (equivalent of Java's main method)
const q1 = new Queue();
q1.enque(4);
q1.enque(5);
q1.enque(6);
q1.display();  // Output: 4 5 6
q1.deque();    // Removes 4
q1.display();  // Output: 5 6
