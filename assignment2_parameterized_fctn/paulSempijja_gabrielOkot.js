
//calculating compound interest rates for 3 years
//for the first year
var year1 = "##########-------First_year---------########"
console.log(year1);
function yr1() {
    var principal_1 = 1000000;
    var rate_1= 0.25;
    var time_1= 1;
    var interest_1 = principal_1 * rate_1 * time_1;
    var amount_1 = interest_1 + principal_1;
    console.log(interest_1);
   // var principal_2 = amount_1;
     return amount_1;
}
console.log(yr1());

//for the second year
var year2 = "##########-------second_year---------########"
console.log(year2);
 function yr2(principal_2, rate_2, time_2){
    var interest_2 = principal_2 * rate_2 * time_2;
    var amount_2 = interest_2 + yr1() 
    console.log(interest_2);
    console.log(amount_2);
     return amount_2;
}
yr2(1250000, 0.25, 1);

//for the third year
var year3 = "##########-------third_year---------########"
console.log(year3);
function yr3() {
    var sum1 = yr1() + 1000000;
    console.log(sum1);
}
console.log(yr3());