
//function a
function houseCost(constructionCost){
    var final = constructionCost + (constructionCost * 0.25);
    return final;
}
//console.log(houseCost(43000000))

//function b
function loan(moneyAsked){
    var interest = ( moneyAsked * 0.01 ) *12;
    var total = moneyAsked + interest;
    return total;
}
//console.log(loan(20000000))


// //function c

function debt(constructionCost, moneyPaid, moneyAsked){
    var balance = loan(moneyAsked) + houseCost(constructionCost) - moneyPaid;
    return balance;
}
console.log("Debt is " + debt(43000000,2000000,20000000));