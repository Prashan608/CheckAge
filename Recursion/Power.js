function Power(x,y){
if(y==0)return 1;
return Power(x,y-1)*x;
}
let x = 3;
let y =2;
console.log(Power(x,y));