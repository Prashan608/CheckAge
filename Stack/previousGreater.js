function prevGreater(arr){
  let n = arr.length;
  let res = new Array(n).fill(-1);
  let st = [];
  for(let i = 0; i<arr.length;i++){
    while(st.length>0 && st[st.length-1]<=arr[i]){
      st.pop();
    }
    if(st.length>0)res[i] = st[st.length-1];
    st.push(arr[i]);
  }
  return res;
}

let arr = [100,80,60,70,60,75,85];
let ans = prevGreater(arr);
console.log(ans.join(" "));