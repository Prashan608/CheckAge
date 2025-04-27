let price = 0;

price>=1000 ? console.log("Expensive") :
price>= 500 && price <= 999 ? console.log("Moderate") :
price <= 500 && price > 0 ? console.log("Affordable"):
price === 0 || price>=0? console.log("Free") : console.log("Negative Price");