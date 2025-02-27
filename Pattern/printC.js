let N = 5;
for(let i = 0; i<N;i++){
    let beg = "";
    for(let j = 0; j<N;j++){
        if(i == 0 || i == N-1 || j == 0){
            beg += "*"+" ";
        }
        else{
            beg += " ";
        }
    }
    console.log(beg);
}