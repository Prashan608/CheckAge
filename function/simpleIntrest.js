function simpleInterst(p,r,t){
    if(p < 0 || r < 0 || t < 0){
        console.log("Invalid input, all values must be non-negative.")
        return;
    }
    let z = (p*r*t)/100;
    console.log(`the simple intrest is  =  ${z}`);
}
 simpleInterst(1000,5,3);
 simpleInterst(1500,7,5);
 simpleInterst(0,6,2);