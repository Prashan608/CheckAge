function roleBasedAccess(user){
  return user.role === "admin" && user.active ? 
  "Admin Access Granted" : user.role === "admin" && 
  !user.active ? "Admin Access Revoked" : user.role === "user" &&
  user.active ? "User Acess Granted" : user.role === "user" &&
  ! user.active ? "User Acess revoked" : "Access denied";
}

let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };
let message = roleBasedAccess(user2);
console.log(message);