let n = 3;
let m = 2;
 let beg = [];
 let num = 1;
for(let i = 0; i<n;i++){
    beg[i] = [];
    for(let j = 0;j<m;j++){
        beg[i][j] = num;
        num++;
    }
}
for(let i =0; i<beg.length;i++){
    console.log(...beg[i]);
}