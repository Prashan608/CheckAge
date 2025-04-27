function findtarget(arr,k){
 for(let i =0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
        let sum = arr[i]+arr[j];
        if(sum == k){
            return true;
        }
    }
 }
 return false;
}
let arr = [7,4,9,6,21,8,11,17];
let k = 18;
console.log(findtarget(arr,k)?"Found":"Not found");