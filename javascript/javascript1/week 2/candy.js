/*CANDY Helper*/
let boughtCandyPrices=[];
let amountToSpend = Math.floor(Math.random() *100);
function canBuyMoreCandy() {
    return (getTotalBoughtCandy()<=amountToSpend);
}
function getTotalBoughtCandy() {
    let i=0;
    let totalBought=0;
    //find summary amount of bought candys
    while(i<boughtCandyPrices.length){
        totalBought+=Number(boughtCandyPrices[i]);
        i++;
    }
    return totalBought;     
}
function addCandy(candyType,weight) {
    //table prices of candy
    var price=0;
    switch(candyType) {
        case "sweet":
            price=0.5;
            break;
        case "chocolate":
            price=0.7;
            break;
        case "toffee":
            price=1.1;
            break;
        case "chewing-gum":
            price=0.03;                
            break;
    }
    if(price===0){
        console.log("this candy is not avaiable!");
        return;
    }
    
    let amount=weight*price;
    let spendTotal=getTotalBoughtCandy()+amount;
    if(canBuyMoreCandy()==true) {                      
        if (spendTotal <= amountToSpend) {
            
            boughtCandyPrices.push(amount);
            console.log("buy="+ amount +" limit=" + amountToSpend + " total=" + getTotalBoughtCandy());
            console.log("You can buy more, so please do!");
            return;
        }
    } 
    console.log("buy=" + amount + " limit=" + amountToSpend + " total=" + spendTotal);
    console.log("Enough candy for you!");            
}