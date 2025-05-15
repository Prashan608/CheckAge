let st = [];
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
console.log("Orginal Stack");
console.log(st);
let idx = 3;
let gt = [];
while(st.length>idx){
    gt.push(st.pop());
}
st.push(5);
while(gt.length>0){
    st.push(gt.pop());
}
console.log("After Adding new Element");
console.log(st);
