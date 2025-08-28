let arr = [[1,3,4,5],[5,4,3,2,]];

for(let i = 0; i<arr.length; i++){
    let beg = "";
    for(let j = 0; j<arr[i].length; j++){
        beg += arr[i][j]+" ";
    }
    console.log(beg)
}