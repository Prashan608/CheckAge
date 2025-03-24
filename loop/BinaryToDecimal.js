let binary_num = 10001;
console.log("Binary Number: "+binary_num);
let decimal = 0;
let pw = 1;
while(binary_num>0){
    let unit_digit = binary_num % 10;
    decimal += unit_digit * pw;
    pw *= 2;
    binary_num = Math.floor(binary_num/10);
}
console.log("Conveted binary to decimal Number: "+decimal);