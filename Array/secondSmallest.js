function findSmall(arr){
    let min = Number.POSITIVE_INFINITY;
    for(let i =0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

function secondSmall(arr){
    let secMin = findSmall(arr);
    for(let i =0;i<arr.length;i++){
        if(arr[i]==secMin) arr[i] = Number.POSITIVE_INFINITY;
    }
    secSmall = findSmall(arr);
    return secSmall;
}

let arr = [10,20,3,40,5];
let x = secondSmall(arr);
console.log("Found Second Smallest: "+x);
