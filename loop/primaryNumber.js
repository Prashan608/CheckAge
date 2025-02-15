function primaryNumber(num){
    if(num<2){
        console.log("Not A Prime Number");
        return;
    }

    let ans = 0;
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            ans = 1;
            break;
        }
    }
    return ans;
}
let num = 13
let result = primaryNumber(num);
if(result === 0) console.log(num+" is a prime Number");
else console.log(num+"is Not a prime Number");