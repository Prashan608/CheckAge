function removeDuplicateElement(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [1,2,3,2,3,4,5];
console.log("Orginal Array = ",arr);
let result = removeDuplicateElement(arr);
console.log("After Removing Duplicate element = ",result);
