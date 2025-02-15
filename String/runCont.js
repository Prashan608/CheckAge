let str = "aabbccd";
let count = 1;
let gtr = "";
for(let i = 0;i<str.length;i++){
    if(str.charAt(i) === str.charAt(i+1)){
        count++;
    }
    else{
        gtr += str[i]+""+count;
        count = 1;
    }
}
console.log(gtr);