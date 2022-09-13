let you =" are the reason";
// Here we are assigning the string "are the reason" to variable you. This variable cannot be redeclared and has block scope
var we = " the next generation of programmer";
//A variable we is being declared that contains string "the next generation of programmer". It can be reassigned a different value
const us = ' we are upcoming software problem solvers';
//const keyword is used to declare constants therefore the variable "us" is a constant that contains the value "we are upcoming software problem solvers"
let num1 = 5;
// we declare variable num1 with value of 5  that cannot be redeclared
let num2 = 10;
// we declare variable num2 with value of 10  that cannot be redeclared
let num3 = num2 += num1;
//Here we  declare variable num3 that is assigned  the sum of variables num1 and num2 and can not be redeclared
let ans = num1 % num2;
// Here we  declare variable ans that is assigned  the value of num1 modulus num2 and can not be redeclared
console.log(ans);
// Thuis allows us to print the value of ans to the screen
console.log(num3 *= 2);
// This allows us to print the new value of  num3 after computing num3*2
var num4;
//We are declaring variable num4 that has not been assigned a value
console.log(num4);
// We are printing out the value of num4
//console.log(2num6);
// This tries to output 2num6 but results in a syntax error because num6 is not defined and a variable cannot start with an integer
//var ans = 'this is not right';
// This attempts to reassign string "this is not right" to variable ans but results in an error because the variable ans was already declared using let keyword
var let ='do you know what you are doing?';
//this allows you declare a variable that can be redeclared and assigns it a value of 'do you know what you are doing?' and the variable is called let.
//Howerver let is a keyword but the variable still outputs with no error
const dad;
// This declares a constant variable dad that is not assigned any value hence resulting in a syntax error
const myNum = num1>num2? num3:us;
// This allows you declare a variable that is a constant and assigns it a value of num1>num2? num3:us and the variable is called myNum.
// This is a ternary operator. It checks if num1 is greater than num2. If yes , it assigns num3 to myNum. If it is not, it assigns us to myNum else assigns us to myNum
console.log(--num3);
// This allows you to decrement num3 by 1 and assign the value to num3 then print the new value out
console.log(num3);
// this allows you to print the value of num3 to the console.
console.log(num3++);
//this allows you to print the value of num3 to the console and then increment num3 by 1.
console.log(num2 != num3);
// this allows you to check if num2 is not equal to num3 and assign the value to num2 != num3.
// This will result in a boolean value of true printed out in the console.
console.log(num3 !=num2 && num2==num2);
//this allows you to check if num3 is not equal to num2 and num2 is equal to num2 and assign the value to num3 !=num2 && num2==num2.
// This will result in a boolean value of true printed out in the console. 
// Both conditions must be true for the result to be true.

if(100>=200){
	const num2 =20;
	console.log('you are now a junior developer');
}
// This allows you to check if 100 is greater than or equal to 200. 
// If yes, it assigns 20 to num2 and prints out 'you are now a junior developer' to the console.
