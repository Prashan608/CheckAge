outerLoop:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i * j > 6) {
            break outerLoop;
        }
        console.log(`i: ${i} j: ${j}`);
    }
}
console.log("Exited Both Loops");
