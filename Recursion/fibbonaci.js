function fib(n){
if(n == 0 || n==1)return n;
let prev = fib(n-1);
let prevPrev = fib(n-2);
return prev + prevPrev;
}

let n = 5;
for(let i = 0; i<=n;i++){
    console.log(fib(i));
}