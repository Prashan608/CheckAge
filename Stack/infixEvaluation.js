function infixEvaluation(str){
let val = [];
let op = [];
let n = str.length;
for(let i = 0; i<n;i++){
    let ch = str[i];
    let asci = ch.charCodeAt();
    if(asci>=48 && asci<=57)val.push(asci-48);
    else if(op.length==0)op.push(ch);
    else {
        if(ch == '+' || ch == "-"){
         let v1 = val.pop();
         let v2 = val.pop();
         if(op[op.length-1]=="+")val.push(v1+v2); 
         if(op[op.length-1]=="-")val.push(v1-v2); 
         if(op[op.length-1]=="*")val.push(v1*v2); 
         if(op[op.length-1]=="/")val.push(Math.floor(v1/v2)); 
         op.pop();
         op.push(ch);
        }
        else{
            if(ch == "*" || ch == "/"){
            let v1 = val.pop();
            let v2 = val.pop();
            if(op[op.length-1]=="*")val.push(v1*v2); 
            if(op[op.length-1]=="/")val.push(Math.floor(v1/v2)); 
            op.pop();
            op.push(ch);
            }
        }
         
    }
}
}

let str = "9-5+3*4/6";
let ans = infixEvaluation(str);
console.log(ans);