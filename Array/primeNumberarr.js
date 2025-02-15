function primeArr(arr){
    let primeArr = [];
    for(let i = 0; i<arr.length; i++){
        let num = arr[i];
        let isPrime = true;
        if(num<2) continue;
        for(let j = 2; j<=Math.sqrt(num);j++){
            if(num % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) primeArr.push(num);
    }
    return primeArr;
}
 let arr = [1,2,3,4,6,7,5];
 let result = primeArr(arr);
 console.log("Prime Array = ",result);
 let num = 25;
 console.log(Math.sqrt(num));