const queue = [];

queue.push(4);      // Enqueue
queue.push(5);
queue.push(6);

console.log("Peek:", queue[0]); // 4

let removed = queue.shift();    // Dequeue
console.log("Removed:", removed); // 4

console.log("Queue:", queue);   // [5, 6]

console.log("Is Empty?", queue.length === 0); // false
