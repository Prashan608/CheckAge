function discountOffer(price){
 if(price <= 20){
    console.log("The final price of Output is = ",price);
    console.log("No discount Applied");
    return;
 }
 if(price <= 0){
    console.log("Invalid Price!! The price must be non negative number");
    return;
 }
 let disc = price/10;
 console.log("The final price output is = ",price-disc);

}

discountOffer(25);
discountOffer(20);
discountOffer(15);
