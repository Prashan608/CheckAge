function BrickWallPattern(H,W){
  for(let i = 0; i<H;i++){
    let beg = "";
    for(let j = 0; j<W;j++){
       if(i % 2 !== 0) beg += "[]";
       else beg +=" "+"[]";
    }
    console.log(beg);
  }
}

let h = 4;
let w = 5;
BrickWallPattern(4,5);