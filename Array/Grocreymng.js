function groceryMangement(g1,g2,g3,g4){
    let item = [];
    item.push(g1);
    item.push(g2);
    item.push(g3);
    item.push(g4);

    let removeditem = item.pop();
    let totalItem = item.length;

    let obj = {
        total_grc : item,
        removeItem : removeditem,
        total : totalItem
    }
    return obj;

}
console.log(groceryMangement("Apple","Banana","Bread","Milk"));
