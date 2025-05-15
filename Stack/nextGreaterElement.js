function NextGreaterElement(arr){
 let n = arr.length;
 let res = [];
 for(let i = 0; i<arr.length;i++){
    let flag = true;
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            res.push(arr[j]);
            flag = false;
            break;
        }
    }
    if(flag==true)res.push(-1);
    
 }
 return res;
}

let arr = [1,3,2,1,8,6,3,4];
let ans = NextGreaterElement(arr);
console.log(ans);