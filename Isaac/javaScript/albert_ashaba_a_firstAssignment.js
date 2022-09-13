let you = " are the reason";
//Here we declare a variable called 'you' and we give it a string value " are the reason".
var we = " the next generation of programmers";
//We declare a variable with the name "we" and initialize it by assigning to it the string value " the next generation of programmers".
const us = " we are upcoming software problem solvers";
//We declare a constant variable "us" and we assigning it the string value ' we are upcoming software problem solvers'.
let num1 = 5;
//Here we declare a variable 'num1' and we give it a number value "5".
let num2 = 10;
//Here we declare a variable 'num1' and we give it a number value "5".
let num3 = (num2 += num1);
//We declare a variable "num3" and assign it the value of the sum of two variables "num2" and "num1". Meaning num3 is 15.
let ans = num1 % num2;
//We declare a variable "ans" and give it a value that is equal to the remainder when you divide num1 with num2 which is 5 .
console.log(ans);
//print in the console the value in the variable ans which is 5.
console.log((num3 *= 2));
//multiply the value in the variable num3 by 2 and print in console the answer. 30.
var num4;
//declare a variable with the name num4 that is not initialized.
console.log(num4);
//print the value of the variable called num4. This returns 'undefined' since variable num4 is not initialized.
console.log(2num6);
//this returns "SyntaxError: Invalid or unexpected token" as it tries to print the value of a variable but the variable name begins with a number and a variable name should not begin with a number.
var ans = "this is not right";
//This will return "Cannot redeclare block-scoped variable 'ans' " because the variable ans has already been declared.
var let = "do you know what you are doing?";
//This declared variable "let" is a JavaScript key word. This is not advisable.
const dad;
//This will return an error because "const" declarations must be initialized.
const myNum = num1 > num2 ? num3 : us;
//myNum is num3 if the value of num1 is greater than the value of num2 or "us" if otherwise. An error will occur since "us" is undefined.
console.log(--num3);
//"pre decrement" first reduce the value of num3 then return it in console.
console.log(num3);
//prints the value in the variable num3 which in this case is 29.
console.log(num3++);
//first prints the value in the variable num3 "29" then increment it by 1.
console.log(num2 != num3);
//returns true or false depending on whether the value in the variable num2 is not equal to that in num3. In this case this is true.
console.log(num3 != num2 && num2 == num2);
//print true or false if the value in num3 is not equal to that in num2 and the value in num2 is equal to the value in num2. In this case this returns true.

if (100 >= 200) {
	const num2 = 20;
	console.log("you are now a junior developer");
}

//if 100 is greater or equal to 200, print in console 'you are now a junior developer'. Variable num2 is declared but its value is never red.
