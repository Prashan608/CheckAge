function findRowWithmaxSum(){
  let minIdx = 0;
  let max = -Infinity;
 for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
    if(sum>max){
        max = sum;
        minIdx = i;
    }
 }
 return minIdx;
}

let arr = [[2,8,3,4,7],[7,2,1,6,3],[5,5,4,1,4],[3,1,8,2,6]];
let ans = findRowWithmaxSum(arr);
console.log("Found Row With Maximum Sum : "+ans);