let max = 5;
let arr = Array(max).fill(0);
let top = -1;
function push(x){
    if(top>=max-1){
        console.log("Stack is full");
        return;
    }
    else{
        arr[++top] = x;
        console.log(x+" is Pushed to stack");
    }
}
push(5);
push(10);
push(15);
push(20);
push(25);
// it gives stackover flow error
push(30)