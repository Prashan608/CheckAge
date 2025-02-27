let sum = [];

for(let i = 0; i<3;i++){
    sum[i] = [];
    for(let j = 0; j<2;j++){
        sum[i][j] = i + j;
    }
}

for(let i = 0; i<sum.length;i++){
    console.log(...sum[i]);
}