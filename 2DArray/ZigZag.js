
let matrix = [[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]];
let ans = [];
for(let i = 0; i<matrix.length;i++){
   ans [i] = [];
  for(let j = 0; j<matrix[i].length;j++){
    if(i % 2 == 0){
    ans[i][matrix[i].length-1-j] = matrix[i][j];
    }
    else{
      ans[i][j] = matrix[i][j];
    }
  }
}

for(let i = 0; i<ans.length;i++){
  console.log(...ans[i]);
}
