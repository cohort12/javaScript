
//A program to determine our lunch treat money after subtracting transport and shopping
function netTransport(transport, discountRate){
    discountAmount = transport* discountRate;
    actualTransport = transport - discountAmount;
    return actualTransport;
}
console.log (netTransport(50000,0.5));
function shopping(packing){
    shoppingAmount = netTransport() - packing;
    return shoppingAmount;

}
console.log(shopping(2000));

function lunchTreat(delivery){
    deliveryAmount = shopping() - delivery;
    console.log(deliveryAmount);

}
lunchTreat(1000);


