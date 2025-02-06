function findMax(arr){
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max)max = arr[i];
    }
    return max;
}

function secondMax(arr){
    let Max = findMax(arr);
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === Max){
            arr[i] = 0;
        }
    }
    let secMax = findMax(arr);
    return secMax;
}
let arr = [10,20,30,40,50];
let x = secondMax(arr);
console.log("Found SecondLargest Element: ",x);