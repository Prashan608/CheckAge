function reverseRec(s){
 if(s.length == 0)return;
 let top = s.pop();
 console.log(top);
 reverseRec(s);
 s.push(top);

}

let st = [];
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
reverseRec(st);