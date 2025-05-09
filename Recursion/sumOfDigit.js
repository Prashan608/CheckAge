function SOD(n){
if(n>=0 && n<=9)return n;
 return SOD(Math.floor(n/10))+n%10;
}

let digit = 1234;
console.log(SOD(digit));