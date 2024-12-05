// =======================================CHAPTER 5  MATH EXPRESSIONS=================================
     // sum of 3 and 5 is 8
     var num1 = 3
     var num2 = 5
     var sum = num1 + num2
     alert("Sum of " + num1 + " " + "and " + num2 + " " + "is " + sum)

     //Repeat task1 for subtraction, multiplication, division & modulus.
     var num3 = 10
     var num4 = 5
     var subtraction = num3 - num4
     alert("Subtraction of " + num3 + " " + "and " + num4 + " " + "is " + subtraction)
     
     var multiplication = num3 * num4
     alert("multiplication of " + num3 + " " + "and " + num4 + " " + "is " + multiplication)
     
     var division = num3 / num4
     alert("Division of " + num3 + " " + "and " + num4 + " " + "is " + division)
     
     var modulus = num3 % num4
     alert("Modulus of " + num3 + " " + "and " + num4 + " " + "is " + modulus)

     
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

var variable = 5;
alert("Value after variable declaration is: " + variable)
variable = 5;
alert("Initial value: " + variable)
variable++;
alert("Value after increment is: " + variable)
variable += 7;
alert("Value after addition is: " + variable)
variable--;
alert("Value after decrement is: " + variable)
var remainder = variable % 3;

//declare oneTicketPrice variable and assign in to 60 rs then multiply by 5
var ticketPrice = 60;
var totalPrice = ticketPrice * 5;
alert("The total price of 5 tickets is: " + totalPrice)

// Write a script to display multiplication table of any number in your browser.

var number = 10;
for(var i = 1; i <= 10; i++){
   var result = number * i;
   alert(number + " x " + i + " = " + result)
}

//Write a program to implement checkout process of a 
//shopping cart system for an e-commerce website. Store 
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1Price = 100;
var item2Price = 200;
var item1Quantity = 2;
var item2Quantity = 3;
var shippingCharges = 50;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
alert("Item 1 Price: " + item1Price + "\nItem 1 Quantity: " + item1Quantity + "\nItem 2 Price: " + item2Price + "\nItem 2 Quantity: " + item2Quantity + "\nShipping Charges: " + shippingCharges + "\nTotal Cost: " + totalCost)

// Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

var totalMarks = 500;
var marksObtained = 350;
var percentage = (marksObtained / totalMarks) * 100;
alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + marksObtained + "\nPercentage: " + percentage)

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var usDollars = 10;
var saudiRiyals = 25;
var totalPakistaniRupees = (usDollars * 104.80) + (saudiRiyals * 28);
alert("Total Currency in Pakistani Rupees: " + totalPakistaniRupees)

//The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”

var currentYear = 2024;
var birthYear = 2005;
var age1 = currentYear - birthYear;
var age2 = currentYear - (birthYear + 1);
alert("They are either " + age1 + " or " + age2 + " years old")

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "Chocolate bars";
var currentAge = 25;
var maximumAge = 95;
var estimatedAmountPerDay = 5;
var totalAmount = (maximumAge - currentAge) * 365 * estimatedAmountPerDay;
alert("You will need " + totalAmount + "Rs " + favoriteSnack + " to last you until the ripe old age of " + maximumAge)
