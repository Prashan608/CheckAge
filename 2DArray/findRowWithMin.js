
function findRowWithMin(){
  let minSum = Infinity;
  let minIdx = 0;
  
  for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
    if(sum<minSum){
        minIdx = i;
        minSum = sum;
    }
  }
  return minIdx
}
let arr = [[2,8,3,4,7],[7,2,1,6,3],[5,5,4,1,4],[3,1,8,2,6]];
let ans = findRowWithMin(arr);
console.log("Found Row With Minimum Sum : "+ans);