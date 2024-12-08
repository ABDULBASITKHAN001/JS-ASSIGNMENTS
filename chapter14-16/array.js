// /   =======================================CHAPTER 14-16 ARRAY =================================




// Declare an empty array using JS literal notation to store
// student names in future.

var students = [];

// Declare an empty array using JS object notation to store
// student names in future

var studentsObj = {};


// Declare and initialize a strings array.
var studentNames = ["John", "Jane", "Michael", "Sarah"];

// Declare and initialize a numbers array.

var studentGrades = [85, 90, 78, 92];

// Declare and initialize a boolean arraY

var studentIsEnrolled = [true, false, true, false];

// Declare and initialize a mixed array.
var studentData = ["John", 85, true, "Jane", 90, false, "Michael", 78, true, "Sarah", 92, false];

// . Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD).

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//SHOW IM MY BROWSER
console.log(education);

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// Student 1: Name - John, Score - 85, Percentage - 17%

var students = ["imam", "hyder", "sarah"];
var scores = [85, 90, 78];
for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    console.log("Student " + (i + 1) + ": Name - " + students[i] + ", Score - " + scores[i] + ", Percentage - " + percentage + "%");
}


// Initialize an array with color names. Display the array
// elements in your browser.

var colors = ["red", "blue", "green", "yellow", "orange"];
console.log(colors);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

var userColor = prompt("Enter a color to add to the beginning:");
colors.unshift(userColor);
console.log(colors);


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the 
// updated array in your browser.
userColor = prompt("Enter a color to add to the end:");
colors.push(userColor);
console.log(colors);

// c. Add two more color to the beginning of the array. 


userColor = prompt("Enter two colors to add to the beginning:");

var colorsToAdd = userColor.split(", ");

for (var i = 0; i < colorsToAdd.length; i++) {
    colors.unshift(colorsToAdd[i]);
}

console.log(colors);

// d. Delete the first color in the array. Display the updated
// array in your browser

var userColor = prompt("Enter the color to delete from the beginning:");

while (colors.indexOf(userColor)!== -1) {
    colors.splice(colors.indexOf(userColor), 1);
}

console.log(colors);

//e. Delete the last color in the array. Display the updated
// array in your browser.

userColor = prompt("Enter the color to delete from the end:");

while (colors.lastIndexOf(userColor)!== -1) {
    colors.splice(colors.lastIndexOf(userColor), 1);
}

console.log(colors);

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser

var userIndex = parseInt(prompt("Enter the index at which to add a color:"));

var userColor = prompt("Enter the color to add:");

if (userIndex >= 0 && userIndex <= colors.length) {
    colors.splice(userIndex, 0, userColor);
}

console.log(colors);


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var userIndex = parseInt(prompt("Enter the index at which to delete colors:"));

var userCount = parseInt(prompt("Enter the number of colors to delete:"));

if (userIndex >= 0 && userIndex + userCount <= colors.length) {
    colors.splice(userIndex, userCount);
}

console.log(colors);


// Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

var scores = [85, 90, 78, 92, 65];
scores.sort(function(a, b) {
    return a - b;
});
console.log(scores);


// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

var cities = ["London", "Paris", "Tokyo", "New York", "Berlin"];
var selectedCities = [];

for (var i = 0; i < 3; i++) {
    selectedCities.push(cities[i]);
}

// Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);


// . Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var stack = [];

stack.push("John");
stack.push("Jane");
stack.push("Michael");

console.log(stack.shift()); // Output: John

stack.push("Sarah");

console.log(stack.shift()); // Output: Jane

console.log(stack.shift()); // Output: Michael

console.log(stack.shift()); // Output: Sarah

// . Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var queue = [];

queue.push("John");
queue.push("Jane");
queue.push("Michael");

console.log(queue.pop()); // Output: Michael

queue.push("Sarah");

console.log(queue.pop()); // Output: Sarah

console.log(queue.pop()); // Output: Jane

console.log(queue.pop()); // Output: John

// 5. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectElement = "<select>";

for (var i = 0; i < manufacturers.length; i++) {
    selectElement += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
}

selectElement += "</select>";

document.write(selectElement);


