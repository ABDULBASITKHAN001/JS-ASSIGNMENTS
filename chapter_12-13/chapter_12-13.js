//   =======================================CHAPTER 12-13 IF…ELSE & ELSE IF STATEMENT =================================


// Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122)

var character = 'A';

if (typeof character === 'number') {
    console.log('The given input is a number');
} else if (character >= 'A' && character <= 'Z') {
    console.log('The given input is an uppercase letter');
} else if (character >= 'a' && character <= 'z') {
    console.log('The given input is a lowercase letter');
} else {
    console.log('The given input is neither a number nor a letter');
}


// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal

var num1 = 10;
var num2 = 20;

if (num1 > num2) {
    console.log('The larger number is ' + num1);
} else if (num1 < num2) {
    console.log('The larger number is ' + num2);
} else {
    console.log('The two numbers are equal');
}

// Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var number = -5;

if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}

// . Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

var character = 'a';

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    console.log('The character is a vowel');
} else {
    console.log('The character is not a vowel');
}

// . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

var correctPassword = 'password123';

var userPassword = prompt('Enter your password');

if (!userPassword) {
    console.log('Please enter your password');
} else if (userPassword === correctPassword) {
    console.log('Correct! The password you entered matches the original password');
} else {
    console.log('Incorrect password');
}

// this if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}

// Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

var time = 1900;

if (time >= 0 && time < 600) {
    console.log('Good night');
} else if (time >= 600 && time < 1200) {
    console.log('Good morning');
} else if (time >= 1200 && time < 1800) {
    console.log('Good afternoon');
} else if (time >= 1800 && time < 2400) {
    console.log('Good evening');
} else {
    console.log('Invalid time');
}







