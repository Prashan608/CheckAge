function reverseString(str){
 let arr = str.split("");
 let l = 0; let r = arr.length -1;
 while(l<r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
 }
 return arr.join("");
}


let str = "Prashant";
console.log("Orginal String = ",str);
let result = reverseString(str);
console.log("Reversed string = ",result);