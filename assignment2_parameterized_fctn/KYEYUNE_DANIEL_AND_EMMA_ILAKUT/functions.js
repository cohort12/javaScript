function testExample(){
    var name = "Ilakut Emma";

    console.log(name)
}
    testExample();

// function netPay(){
//     var gross = 1000000;
//     var tax = 10000*4;
//     var actual_pay = gross-tax;
// return actual_pay;
// }
 
// function welfare(){
//     var welfare = 50000;
//     var takeHome = netPay()-welfare
//     console.log(takeHome)
// }

function redifinedPaye(gross, tax){
    var actual_pay = gross-tax;
    return actual_pay;
    console.log(actual_pay)
}
redifinedPaye();

// create 3 parameterised functions that will call one another