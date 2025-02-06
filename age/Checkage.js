function checkAge(age){
 if(age<=0 || isNaN(age)){
    console.log("Invalid Age");
    return;
 }
 age>=60 ? console.log("Senior Citizen") : console.log("Not Senior Citizen");
}
let age = -1;
checkAge(age);