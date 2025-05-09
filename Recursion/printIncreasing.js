function PrintIncrease(n){
 if(n == 0)return;
  PrintIncrease(n-1);
 console.log(n);
}

let a = 5;
PrintIncrease(a);