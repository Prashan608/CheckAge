function frequencyOfChar(str){
 let freq = {};
 for(let i = 0; i<str.length;i++){
    if(freq[str[i]]){
       freq[str[i]]++;
    }
    else{
        freq[str[i]] = 1;
    }
 }
 return freq;
}

function firstNonRepeating(str){
  let frequency = frequencyOfChar(str);
   for(let i = 0; i<str.length;i++){
    if(frequency[str[i]]===1){
        return str[i];
    }
   }
   return null;
   }

   let gtr = "swiss";
   let res = firstNonRepeating(gtr);
   console.log(res);
