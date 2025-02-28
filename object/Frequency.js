let arr = [1,2,3,4,5,2,1,3,4,5,6];
let freq = {};
for(let i = 0; i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]++;
    }
    else {
        freq[arr[i]] = 1;
    }
}

console.log(freq);