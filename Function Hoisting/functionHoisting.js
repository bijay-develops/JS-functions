// JavaScript Declarations are Hoisted

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
x = 5; // Assign 5 to x
elem = document.getElementById("functionHoisting1"); // Find an element 
elem.innerHTML = x;           // Display x in the element
var x; // Declare x

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.
var x = 5; // Initialize x
var y = 7; // Initialize y
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;       // Display x and y


//This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
var x = 5; // Initialize x
var y;    // Declare y
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;       // Display x and y
y = 7;   // Assign 7 to y
