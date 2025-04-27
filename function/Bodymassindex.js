function BMI(height,weight){ 
  if(height === 0){
    console.log("Invalid Input,height cant be zero");
    return;
  }
  if(height < 0 || weight < 0){
    console.log("Invalid input,height and weight must be positive Number");
    return;
  }
 let bmi = weight/(height*height);
 console.log("YOUR BMI IS = "+bmi.toFixed(2));
}
BMI(1.75,70);
BMI(1.60,55);
BMI(1.80,90);