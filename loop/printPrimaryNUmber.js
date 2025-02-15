
function primaryNumber(num){
   if(num == 1){
    console.log("Not A prime Number");
    return;
   }
    let beg = "";
   for(let i = 2; i<=num;i++){
     let flag = true;
     for(let j = 2; j<i;j++){
        if( i % j === 0)flag = false;
     }
     if(flag) beg += i+" ";
   }
   return beg;
}

let num = 13;
let result = primaryNumber(num);
console.log("Primary number Between "+2+" to "+num);
console.log(result);