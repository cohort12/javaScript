// KYEYUNE DANIEL
// ILAKUT EMMANUEL
const prompt = require("prompt-sync")();
var principal = parseInt(prompt("What is your initial Investment?"));
var duration = parseInt(prompt("For How long do you want to Investment?"));
const rate = 0.5;
const compounding_period = 10;

function simpleInterest(principal ,rate, duration ){
    var interest_obtained = principal*rate*duration;
    return interest_obtained;
}

function compoundInterest(compounding_period){
    var compound = simpleInterest(principal,rate,duration)*compounding_period;
    return compound;
}

function totalEarnings(){
    var totals = compoundInterest(compounding_period)
    console.log("You're total earnings will be  is UGX %d",totals)
}
totalEarnings();

 
  


