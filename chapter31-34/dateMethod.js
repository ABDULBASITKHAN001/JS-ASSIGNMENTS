// =======================================CHAPTER 31-34 DATE METHODS =================================/

// . Write a program that displays current date and time in 
// your browser.

var today = new Date();
var currentDate = today.toDateString();
var currentTime = today.toLocaleTimeString();
console.log("Current Date & Time: " + currentDate + " " + currentTime);

// Write a program that alerts the current month in words. 
// For example December.

var currentMonth = today.getMonth() + 1;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Current Month: " + months[currentMonth - 1]);

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

var currentDay = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("First 3 Letters of Current Day: " + days[currentDay].slice(0, 3));

//  Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

if (currentDay === 0 || currentDay === 6) {
    console.log("It's Fun Day");
}

// . Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

var currentDate = new Date();
var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
var lastDay = lastDayOfMonth.getDate();
console.log("Current Date: " + currentDate);
console.log("Last Day of Month: " + lastDay);

// Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

var currentDate = new Date();
var minutesSinceMidnight = currentDate.getMinutes();
console.log("Minutes Since Midnight: " + minutesSinceMidnight);

// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

var currentDate = new Date();
var hours = currentDate.getHours();
if (hours < 12) {
    console.log("Its AM");
} else {
    console.log("Its PM");
}

// . Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

var laterDate = new Date(2020, 11, 31);
console.log("Later Date: " + laterDate);

// Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on feb 20 2025

var startingDate = new Date(2025, 1, 20);
var currentDate = new Date();
var daysPast = Math.round((startingDate - currentDate) / (1000 * 60 * 60 * 24));
console.log("Number of days past since 1st Ramadan: " + daysPast);

// write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

var referenceDate = new Date("2015-01-01");
var currentDate = new Date();
var secondsElapsed = Math.round((currentDate - referenceDate) / 1000 / 365 / 60 );
console.log("Seconds elapsed between reference date and beginning of 2015: " + secondsElapsed);

// Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

var currentDate = new Date();
var hours = currentDate.getHours() + 1;
currentDate.setHours(hours);
console.log("Date & Time after 1 hour: " + currentDate);

// Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

var age = 20;
var birthYear = new Date().getFullYear() - age;
console.log("Your birth year is: " + birthYear);

// Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

var currentDate = new Date();
var hundredYearsBack = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
alert("Date 100 years back: " + hundredYearsBack);






