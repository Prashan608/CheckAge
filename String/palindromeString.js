function isPalindrome(str){
  let l = 0; let r = str.length-1;
  while(l<r){
    if(str.charAt(r) !== str.charAt(l)){
        return false;
    }
    l++
    r--;
  }
  return true;
}

let str = "racecar";
let bool = isPalindrome(str);
if(bool)console.log("String is Palindrome");
else console.log("String is not Palindrome");