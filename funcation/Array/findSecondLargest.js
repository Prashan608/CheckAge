function secondMax(arr){
let mx = Number.NEGATIVE_INFINITY;
let secondMax =Number.NEGATIVE_INFINITY;
//let arr = [10,20,30,40,50,60];
for(let i = 0; i<arr.length;i++){
    if(arr[i]>mx){
        secondMax = mx;
        mx = arr[i]
    }
    else if(arr[i]>secondMax && arr[i] !== mx){
        secondMax = arr[i];
    }
}
   return secondMax;
}

let arr = [10,20,30,40,50];
let x = secondMax(arr);
console.log("Found SecondLargest Element: ",x);
