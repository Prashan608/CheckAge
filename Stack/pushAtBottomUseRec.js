function PushAtBottom(s,x){
if(s.length === 0){
 s.push(x);
 return;
}
let top = s.pop();
PushAtBottom(s,x);
s.push(top);
}
let st = [];
st.push(5);
st.push(6);
st.push(7);
st.push(8);
st.push(9);
let x = 10;
PushAtBottom(st,x);
console.log(st);