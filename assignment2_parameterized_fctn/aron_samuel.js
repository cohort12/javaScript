function multiply(f, g){
    return f * g
 }
 //console.log(multiply(61, 56));s

 function add(f, g){
    var mult = multiply(f, g)
    return mult + f + g;
 }
 //console.log(add(4, 5));

 function division(f, g){
    var div = add(f, g)
    return div % f % g;
 }
 console.log(division(6, 4))