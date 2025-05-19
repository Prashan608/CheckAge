function NextGreaterElement(arr) {
  let n = arr.length;
  let res = new Array(n).fill(-1); 
  let st = []; 
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }

    
    if (st.length > 0) {
      res[i] = st[st.length - 1];
    }

    st.push(arr[i]);
  }

  return res;
}

let arr = [1, 3, 2, 1, 8, 6, 3, 4];
let ans = NextGreaterElement(arr);
console.log(ans); // Expected Output: [3, 8, 8, 8, -1, -1, 4, -1]
