function pineTree(rows) {
    for (let i = 0; i < rows; i++) {
        let spaces = " ".repeat(rows - i - 1);  
        let stars = "*".repeat(2 * i + 1);     
        console.log(spaces + stars + spaces);
    }
}

pineTree(5);
