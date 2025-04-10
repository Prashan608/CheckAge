function transpoeMatrix(matrix){
 let transpose = [];
 for(let i = 0; i<matrix.length;i++){
    transpose[i] = [];
    for(let j = 0; j<matrix[i].length;j++){
        transpose[i][j] = matrix[j][i];
    }
 }
 return transpose;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
let ans = transpoeMatrix(arr);
for(let row of ans){
    console.log(...row);
}