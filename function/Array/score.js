let arr = [30,40,50,60,95,99,92,86,40,75];
console.log("Initial Score");
console.log(arr);
for(let i = 0; i<arr.length; i++){
    if(arr[i]<40){
        arr[i] += 20;
    }
    else if(arr[i]>90){
        arr[i] = 90;
    }
}
console.log("After Adjusting Score");
console.log(arr);
let count = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i] >= 50)count++;
}
console.log("Total "+count+" Student Promoted");