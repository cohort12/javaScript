//define 3 parameterised functions that are calling one anather

//this function adda two numbers
function adding(x, y){
    let answer = x + y;
    return answer;
}

//this function subtracts 5 from the the results of the first function
function subtracting(){
    let result_for_minus = adding(10, 15) - 5;
    return result_for_minus;
}

//this function multiplies the results of the second function by 2
function multiplication(){
    let result_for_multiply = subtracting() * 2;
    return result_for_multiply
}

console.log(multiplication());