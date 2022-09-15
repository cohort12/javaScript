function nssfPay(gross, nssfRate, taxRate){
    var nssf = gross * nssfRate;
    return nssf;
}

function taxPay(gross, nssfRate, taxRate){
    var tax = (gross - nssfPay(gross, nssfRate, taxRate))* taxRate;
    return tax;
}

function netPay(gross, nssfRate, taxRate){
    var takeHome = gross - nssfPay(gross, nssfRate, taxRate) 
    - taxPay(gross, nssfRate, taxRate);
    console.log(takeHome);    
}
console.log("The take home salary is: ")
netPay(2000000, 0.15, 0.3);