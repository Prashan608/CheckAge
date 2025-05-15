let st = [];
st.push(40);
st.push(50);
st.push(60);
st.push(70);
st.push(80);

let gt = [];

// First reversal: st → gt
while (st.length > 0) {
  gt.push(st.pop());
}

let kt = [];

// Second reversal: gt → kt
while (gt.length > 0) {
  kt.push(gt.pop());
}

console.log(kt);
