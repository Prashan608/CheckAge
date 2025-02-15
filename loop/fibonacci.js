function printFibonnaci(num){
   let a = 0;
   let b = 1;
   let c = 0;
   let beg = "";
   for(let i=1;i<=num;i++){
       beg += a+" ";
       c = a+b;
       b = a;
       a = c;
       
   }
   return beg;
}

let num = 6;
let result = printFibonnaci(num);
console.log(result);