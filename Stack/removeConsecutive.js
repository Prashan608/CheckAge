
function removeConsecutive(arr) {
  let n = arr.length;
  let st = [];

  for (let i = 0; i < n; i++) {
    // If stack is empty or top of stack is not equal to current element
    if (st.length === 0 || st[st.length - 1] !== arr[i]) {
      st.push(arr[i]);
    } else {
      // Current element is equal to top of stack
      // Check if next element is different (i.e., end of repetition)
      if (i === n - 1 || arr[i] !== arr[i + 1]) {
        st.pop(); // Remove the duplicate from stack
      }
    }
  }

  return st;
}

let arr = [1, 2, 2, 3, 10, 10, 10, 4, 4, 4, 5, 7, 7, 2];
let res = removeConsecutive(arr);
console.log(res); // Output: [1, 3, 5, 2]
