function multiply(n,k){
 if(k==1){
    console.log(n);
    return;
 }
 multiply(n,k-1);
 console.log(n*k);

}

let n = 12;
let k = 5;
multiply(n,k);