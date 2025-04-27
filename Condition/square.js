function checkSumOfSquares(k) {
    let a = 0;
    let b = Math.floor(Math.sqrt(k));

    while (a <= b) {
        let sum = a * a + b * b;
        
        if (sum === k) {
            return true;
        } else if (sum < k) {
            a++; //
        } else {
            b--; // 
        }
    }

    return false;
}

// Test Cases
console.log(checkSumOfSquares(25)); // Output: true (3^2 + 4^2 = 25)
console.log(checkSumOfSquares(7));  // Output: false (No such pair)
console.log(checkSumOfSquares(50)); // Output: true (5^2 + 5^2 = 50)
console.log(checkSumOfSquares(1));  // Output: true (1^2 + 0^2 = 1)
