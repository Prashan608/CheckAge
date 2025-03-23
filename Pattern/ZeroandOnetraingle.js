for(let i = 1; i<=4;i++){
    let beg = "";
    for(let j = 1; j<=i;j++){
      if(i % 2 !== 0){
        if(j % 2 == 0) beg += 0+" ";
        else beg += 1+" ";
      }
      else{
        if(j%2==0) beg += 1+" ";
        else beg += 0+" ";
      }
}
console.log(beg);
}