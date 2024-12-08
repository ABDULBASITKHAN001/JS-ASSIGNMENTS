// =======================================CHAPTER 21 - 25 STRING METHODS =================================

// Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
console.log("Hello, " + fullName)
;

// . Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

var userInput = prompt("Enter your favorite mobile phone model:");
var length = userInput.length;
console.log("The length of your input is: " + length);

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
var index = word.indexOf("n");
console.log("The index of the letter 'n' is: " + index);

// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
console.log("The last index of the letter 'l' is: " + lastIndex);

// . Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
var character = word.charAt(3);
console.log("The character at index 3 is: " + character);

// Repeat Q1 using string concat() method

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
console.log("Hello, " + fullName);

// . Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

var word = "Hyderabad";
var replacedWord = word.replace("Hyder", "Islam");
console.log("The word with 'Islam' instead of 'Hyder' is: " + replacedWord);

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
console.log("The message with '&' instead of 'and' is: " + replacedMessage);

// . Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

var stringNumber = "472";
var number = parseInt(stringNumber);
console.log("The value of the string is: " + stringNumber);
console.log("The type of the value is: " + typeof stringNumber);
console.log("The value of the number is: " + number);
console.log("The type of the number is: " + typeof number);

// Write a program that takes user input. Convert and 
// show the input in capital letters.

var userInput = prompt("Enter a string:");
var capitalizedInput = userInput.toUpperCase();
console.log("The capitalized string is: " + capitalizedInput);

// Write a program that takes user input. Convert and 
// show the input in title case.

var userInput = prompt("Enter a string:");
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
console.log("The title case string is: " + titleCaseInput);

// write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var stringNum = String(num).replace(".", "");
console.log("The string representation of the number is: " + stringNum);

// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
//  , !], refer to ASCII table.

var username = prompt("Enter a username:");
var specialSymbolRegex = /[@.,!]/;
if (specialSymbolRegex.test(username)) {
    alert("Username cannot contain special symbols among [@.,!]");
} else {
    console.log("Valid username: " + username);
}


// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter a item to search:");
var lowercaseInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
    var lowercaseItem = A[i].toLowerCase();
    if (lowercaseItem === lowercaseInput) {
        found = true;
        break;
    }
}

if (found) {
    console.log(userInput + " is found in the list.");
} else {
    console.log(userInput + " is not found in the list.");

}

// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter a password:");

var requirementsMet = true;

if (!isNaN(password[0])) {
    requirementsMet = false;
    alert("Password should not start with a number.");
}

var hasAlphabets = /[a-zA-Z]/.test(password);

if (!hasAlphabets) {
    requirementsMet = false;
    alert("Password should contain alphabets.");
}

var hasNumbers = /[0-9]/.test(password);

if (!hasNumbers) {
    requirementsMet = false;
    alert("Password should contain numbers.");
}

var length = password.length;

if (length < 6) {
    requirementsMet = false;
    alert("Password should be at least 6 characters long.");
}

if (requirementsMet) {
    console.log("Valid password: " + password);
}


// Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

var university = "University of Karachi";
var universityArray = university.split("");
console.log(universityArray);

// Write a program to display the last character of a user 
// input

var userInput = prompt("Enter a string: ");
var lastCharacter = userInput[userInput.length - 1];
console.log("The last character of the string is: " + lastCharacter);

// You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

var givenString = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var count = givenString.split(wordToCount).length - 1;
console.log("Number of occurrences of '" + wordToCount + "': " + count);


