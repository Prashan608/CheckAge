function checkPrime(num){
    let check = true;
    for(let i = 2; i<num;i++){
        if(num % i == 0){
            check = false;
            break;
        }
    }
    return check;

}
let num = 13;
let res = checkPrime(num)
if(res)console.log("Prime Number");
else console.log("Not prime Number");