function Encrypted(str){
    let res = "";
    for(let i = 0; i<S.length;i++){
      let asci = S[i].charCodeAt();
      if(asci>=65 && asci<=90){
        res += String.fromCharCode((asci-65+K)%26+65);
      }
      else if(asci>=97 && asci<=122){
        res += String.fromCharCode((asci-97+K)%26+97);
      }
      else if(asci >= 48 && asci<=57){
        res += String.fromCharCode((asci-48+K)%10+48);
      }
      else {
        res += S[i];
      }
    }
    console.log(res)
}