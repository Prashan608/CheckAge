function span(arr){
let span = [];
 for(let i = 0; i<arr.length;i++){
    let count = 1;
    for(let j = i+1;j>=0;j--){
        if(arr[j]<=arr[i])count++;
    }
    span.push(count);
 }
 return span;
}

let arr = [7,9,4,10,13,15];
let ans = span(arr);
console.log(ans);