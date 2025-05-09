function countDigit(n){
if(n>=0 && n<=9){
    return n;
}
 return countDigit(Math.floor(n/10))+1;
}

let digit = 1234;
console.log(countDigit(digit));
