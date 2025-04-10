function Additon2darr(matrix1,matrix12){
    let r1 = matrix1.length;
    let c1 = matrix1[0].length;
    let r2 = matrix12.length;
    let c2 = matrix12[0].length;
    if(r1 != r2 || c1 != c2){
      console.log("Wrong input - Additon Not Possible");
      return;
    }
    let sum = [];
    
    for(let i = 0; i<r1;i++){
      sum [i] = [];
      for(let j = 0;j<c1;j++){
        sum[i][j] = matrix1[i][j] + matrix12[i][j];
      }
    }
    return sum;
  }
  
  
  let arr1 = [[2,3],[4,5]];
  let arr2 = [[1,3],[4,5]];
  let result = Additon2darr(arr1,arr2);
  console.log(...result);