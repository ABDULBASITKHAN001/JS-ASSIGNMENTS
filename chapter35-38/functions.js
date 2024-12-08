// =======================================CHAPTER 35 -38 function =================================
// Write a function that displays current date & time in your 
// browser.

function displayDateTime() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var formattedDate = month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    console.log(formattedDate);
}
displayDateTime()

// . Write a function that takes first & last name and then it 
// greets the user using his full name.

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName);
}
greetUser("muhammad", "imam")

// . Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers(5, 10);

// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser

function performOperation(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Error: Invalid operator. Please use one of the following: +, -, *, /");
    }

    console.log("Result: " + result);
}

performOperation(5, 3, '*')
;
// . Write a function that squares its argument.

function squareNumber(number) {
    var result = number * number;
    return result;
}   

console.log(squareNumber(5)); // Outputs: 25

// . Write a function that computes factorial of a number.

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(5)); // Outputs: 120

// . Write a function that take start and end number as inputs 
// & display counting in your browser.

function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

countNumbers(1, 10); // Outputs: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10