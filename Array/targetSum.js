
function findtarget(arr,k){
 arr.sort((a,b)=>a-b);
 let n = arr.length-1;
 let l = 0 ,r = n;
 while(l<r){
  let sum = arr[l]+arr[r];
  if(sum==k){
    return true;
  }
  else if(sum<k){
    l--;
  }
  else{
    r++;
  }
 }
 return false;
}
let arr = [7,4,9,6,21,8,11,17];
let k = 18;
console.log(findtarget(arr,k)?"Found":"Not found");