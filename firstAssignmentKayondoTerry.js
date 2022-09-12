// Kayondo Terry

// declares and initializes a variable 'you' the string value " are the reason"
let you =" are the reason";
// declares and initializes a variable 'we' with the string value " the next generation of programmer"
var we = " the next generation of programmer";
// declares and initializes a constant variable 'us' the string value " we are upcoming software problem solvers"
const us = ' we are upcoming software problem solvers';
// declares and initializes a variable 'num1' with the number value 5
let num1 = 5;
// declares and initializes a variable 'num2' with the number value 10
let num2 = 10;
// adds 'num1'(5) to 'num2'(10), stores the result(15) in 'num2', and stores the same result(15) in a newly declared variable 'num3'
let num3 = num2 += num1;
// declares and initializes a variable 'ans' with the result of the modulus operation 'num1 % num2'
let ans = num1 % num2;
// outputs 5 (the current value stored in the variable 'ans')
console.log(ans);
// multiplies the value stored in 'num3'(30) by 2, stores the result in 'num3', outputs 30
console.log(num3 *= 2);
// declares a variable 'num4'
var num4;
// outputs undefined (because 'num4' has not been initialized)
console.log(num4);
// result in an error: a variable name cannot start with a number
console.log(2num6);
// results in an error: the variable 'ans' has already been declared
var ans = 'this is not right';
// declares and initializes a variable 'let' with the string value "do you know what you are doing?"
var let ='do you know what you are doing?';
// results in an error: constants must be initialized on declaration
const dad;
// tests if 'num1'(5) is greater than 'num2'(15); this is false, so the value in 'us' is selected to be stored in the newly declared constant 'myNum'
const myNum = num1>num2? num3:us;
//  decrements 'num3'(30) by 1 and stores the new value(29) in 'num3' and outputs 29
console.log(--num3);
// outputs 29 (current value of 'num3')
console.log(num3);
// outputs 29 (current value of 'num3'), then increments 'num3' by 1 and stores the new value (30) in 'num3'
console.log(num3++);
// outputs true (boolean value of the comparison: 'num2'(15) is not equal to 'num3'(30) )
console.log(num2 != num3);
// tests if 'num3' is not equal to 'num2', this is true. tests if 'num2' is equal to 'num2'. this is true. test if 'true and true', this is true, so it outputs true
console.log(num3 !=num2 && num2==num2);

if(100>=200){
	const num2 =20;
	console.log('you are now a junior developer');
}
// the if statement checks if 100 is greater than or equal to 200, this is false, so the code in the if statement is not executed

