function discount(age){
    return age>=60 ? "Eligiable for senior Discount" :"Not Eligiable for senior Discount"
}

let age = 32;
let res = discount(age);
console.log(res);