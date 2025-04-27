function findSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
      sum += arr[i]
    }
    return sum
  }
  
  let res = 0;
  let arr = [5,4,-1,7,8];
  for(let i = 0; i<arr.length;i++){
    let arr2 = [];
    for(let j = i; j<arr.length;j++){
      arr2.push(arr[j]);
      let sum = findSum(arr2);
      if(res<sum) res = sum;
    }
  }
  console.log(sum);