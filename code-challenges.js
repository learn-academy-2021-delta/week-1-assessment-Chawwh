// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// ~~~Hi! So it looks to me that we'll be using if/else for this project. Lets start by creating a variable for temperature. Now using the 'if' statement to get us rolling, lets compare our var to being less than 212. Next lets write an else if that our var should be strictly equal to 212. Lastly we need to write our else for when our var is greater than 212. Don't forget to add log outputs for these statements!~~~

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//var temp = 35;
// var temp = 350;
var temp = 212;

if (temp < 212){
console.log(temp + " is below boiling point");
} else if (temp === 212){
console.log(temp + " is at boiling point");
} else {
    console.log(temp + " is above boiling point");
}


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

// ~~~Hey again! Let's get this going!! We're going to start this off by creating a new variable to add our first two together. We can do this with .conCat(). Now we can call our new var and add .length to the end and hopefulllllyyyy get 10!~~~

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

var myNumbers3 = myNumbers1.concat(myNumbers2);

console.log(myNumbers3.length);



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

// ~~~Okie dokie! 

var myString1 = "charlie"
var myString2 = "delta"




// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24
