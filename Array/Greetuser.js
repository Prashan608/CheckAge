function greetUser(str){
    if(str === "" || str === null) {  
        console.log("Cancelled");  
        return;  
    }
    console.log("Hello! " + str);
}

let str =  prompt("Enter Name");
greetUser(str);
