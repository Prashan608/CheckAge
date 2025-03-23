for(let i = 1; i<=5;i++){
    let beg  = "";
    for(let j = 1; j<=5;j++){
        if(i==j || i+j == 6) beg += "*";
        else beg += " ";
    }
    console.log(beg);
}