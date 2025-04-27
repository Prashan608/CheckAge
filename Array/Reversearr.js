function reverseArr(arr){
let n = arr.length;
let l = 0; let r = n-1;
while(l<r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
}
return arr;

}
let arr = [1,2,3,4,5];
let res = reverseArr(arr);
console.log(res);