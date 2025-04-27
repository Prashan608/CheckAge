function compareNum(num1,num2,){
 if(num1<num2){
   console.log(`${num2} is greater than ${num1}`);
 }
 else if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
 }
 else{
    console.log("Both are Equal");
 }
}

compareNum(5,10);
compareNum(7,7);
compareNum(-1,-10);
compareNum(0,0);

