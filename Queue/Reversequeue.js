const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
let st = [];
while(queue.length>0){
    st.push(queue.shift());
}
console.log(st.join(" "));
while(st.length>0){
    queue.push(st.pop());
}
console.log(queue.join(" "));