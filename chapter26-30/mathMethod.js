// =======================================CHAPTER 26-30 MATH METHODS =================================

// . Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
var number = 3.45231;
console.log (" simple value ========>" +number);
// b. round off value of the number
var roundedNumber = Math.round(number);
console.log(" rounded value ========>" +roundedNumber);
// c. floor value of the number
var flooredNumber = Math.floor(number);
console.log(" floored value ========>" +flooredNumber);
// d. ceil value of the number 
var ceiledNumber = Math.ceil(number);
console.log( " ceiled value ========>" +ceiledNumber);

// . Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number

var negativeNumber = -3.45231;
console.log( "negative  value ========>" +negativeNumber);

// b. round off value of the number

var negativeRoundedNumber = Math.round(negativeNumber);
console.log("negative rounded value ========>" +negativeRoundedNumber);

// c. floor value of the number

var negativeFlooredNumber = Math.floor(negativeNumber);
console.log("negative floored value ========>" +negativeFlooredNumber);

// d. ceil value of the number

var negativeCeiledNumber = Math.ceil(negativeNumber);
console.log("negative ceiled value ========>" +negativeCeiledNumber);

// Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var absoluteValue = Math.abs(-4);
console.log("absolute value =======>" +absoluteValue);

// . Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser

var diceValue = Math.floor(Math.random() * 6) + 1;
console.log( "dice value =======>" +diceValue);

// . Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinValue = Math.floor(Math.random() * 2) + 1;
console.log("coin value =======>" +coinValue);

// Write a program that shows a random number between 1 
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("random number between 1 to 100 is  =======>" + randomNumber);

// . Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50

var userWeight = 50;
console.log("user weight ========>" + userWeight);

// b. 50kgs
console.log("user weight in kgs ========>" + userWeight + " kgs");


// c. 50.2kgs
var userWeights = 52
var userWeightInKgs = userWeights / 1000;
console.log("user weight in kgs ========>" + userWeightInKgs + " kgs");


// . d. 50.2kilograms

var userWeightInPounds = userWeightInKgs * 2.20462;
console.log("user weight in pounds ========>" + userWeightInPounds + " pounds");

// write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = parseInt(prompt("Enter a number between 1 and 10:"));

if (userNumber === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log("Sorry, the correct number was " + secretNumber + ".");
}