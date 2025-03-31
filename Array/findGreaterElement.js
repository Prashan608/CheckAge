function findGreater(arr){
    let ans = -1;
  for(let i = 1; i<arr.length;i++){
    let left = 0;
    for(let j = i-1;j>=0;j--){
        if(arr[j]>arr[i]){
            left = 1;
            break;
        }
    }
    let right = 0;
    for(let j = i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            right = 1;
            break;
        }
    }
    if(right == 0 && left == 0){
        ans = arr[i];
        break;
    }
}
return ans;
}

let arr = [7,1,9,13,14,16,21,18];
let ans = findGreater(arr);
console.log(ans);