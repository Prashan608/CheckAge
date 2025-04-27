
function greetMessage(user){
  return user.role === 'Admin' && user.active === true ? console.log("Admin Access Granted") :
         user.role === "Admin" && user.active === false ? console.log("Admin Access Revoked") :
         user.role === "user" && user.active === true  ? console.log("User Access Granted") :
         user.role === "user" && user.active === false ? console.log("User Access Revoked") :
         console.log("Access denied!");
}

let user1 = {name : "Alice",role : "Admin",active : false};
let user2 = {name : "Bob",role : "user",active : true};
greetMessage(user1);


