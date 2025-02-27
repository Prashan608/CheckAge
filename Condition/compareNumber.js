function compareNumber(num1,num2,num3){
    return num1>num2 && num1>num3 ? num1 : num2>num3 ? num2 : num3
}
let num1 = 72;
let num2 = 18;
let num3 = 92;
let res = compareNumber(num1,num2,num3);
console.log(res);