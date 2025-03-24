let decimal = 17;
console.log("Decimal Number: "+decimal);
let binary_num = 0;
let pw = 1;
while(decimal>0){
    let unit_digit = decimal % 2;
    binary_num += unit_digit * pw;
    pw *= 10;
    decimal = Math.floor(decimal/2);
}
console.log("Converted Decimal to binary: "+binary_num);