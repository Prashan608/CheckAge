function mapStringToObject(str){
    let charMap = {};
    for(let i = 0; i<str.length;i++){
        charMap[i+1] = str.charAt(i);
    }
    return charMap;
}

function displayObject(obj){
    for(let key in obj){
        console.log(key+" : "+obj[key]);
    }
}

let str = "abcd";
let obj = mapStringToObject(str);
displayObject(obj);
