function print2dArrcolm(arr){
   for(let j=0; j<arr[0].length; j++){
    let beg = "";
    for(let i=0; i<arr.length; i++){
        beg += arr[i][j]+" ";
    }
    console.log(beg)
   }
}

let arr = [[2,8,3,4,7],[7,2,1,6,3],[5,5,4,1,4],[3,1,8,2,6]];
print2dArrcolm(arr)