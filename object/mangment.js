function mangementSystem(person){
   if(person.role === "admin" && person.experience>5 && person.department === "IT" && person.active){
    console.log("Full IT Admin Acess");
   }
   else if(person.role === "admin" && person.experience>5 && person.department !== "IT" && person.active){
        console.log("Genreal Admin Access");
   }
   else if(person.role === "admin" && person.experience<=5 && person.department !== "IT" && person.active){
        console.log("Limited Admin Access ")
   }
   else if(person.role === "admin" && person.experience<=5 && person.department !== "IT" && !person.active){
    console.log("Admin Acess revoked");
   }
   else if (person.role === "manager" && person.active && person.experience>3 && person.department === "Sales"){
      console.log("Sales Manger Access");
   }
   else if(person.role === "manager" && person.active && person.experience>3 && person.department !== "Sales"){
      console.log("Full Manager Access");

   }
   else if(person.role === "manager" && person.active && person.experience<=3){
    console.log("Limited Manger Access");
   }
}

let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
let person3 = { role: "user", experience: 2, active: true, department: "Support" };
let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };

mangementSystem(person1);
