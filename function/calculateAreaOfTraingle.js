function calculateArea(base,height){
if(base === 0 && height === 0){
    console.log('0.0');
    console.log("Traingle with no Area");
    return;
}
if(base <= 0 || height <= 0){
    console.log("Invalid Number !! base and height must be positive Number");
    return;
}
 
let x = (base * height)/2;
console.log("The Area of Traingle is = ", x);
}

calculateArea(0, 0);  // Invalid Input!
calculateArea(-5, 10); // Invalid Input!
calculateArea(5, 10); 