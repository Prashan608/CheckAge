let arr = [10,20,30,40,50];
let top = arr.length;
function pop(){
    if(top<=0){
        console.log("stack underflow error");
        return;
    }
    else{
       let x = 0;
       x = arr[--top];
       return x;
    }
    
}

let f1 = pop();
let secnd = pop();
console.log(f1,secnd)