
function display2DArr(arr){
     for(let row of arr){
         console.log(...row);
     }
 }

 function Transposearr(arr){
    let row = arr.length;
    let column = arr[0].length;
    let Transpose = [];
    for(let i = 0; i<column;i++){
        Transpose[i] = [];
    }
    for(let i = 0; i<row;i++){
        for(let j = 0; j<column;j++){
            Transpose[j][i] = arr[i][j]
        }
    }
    display2DArr(Transpose);
 }

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Orginal Array");
display2DArr(arr);
console.log("Orignal Array After Transpose");
Transposearr(arr);

