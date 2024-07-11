// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

//                        Parameter Rules
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

//                       Default Parameters
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }  
    return x * y;
  }
  document.getElementById("demo1").innerHTML = myFunction(4);

// document.getElementById("demo1").innerHTML = "Hyy Sir";
//   function changeText() {
//     document.getElementById("demo1").innerHTML = "Great To Have You";
//   }



//                         Default Parameter Values
function myFunction(x, y = 10) {    //If y is not passed or undefined, then y = 10:
    return x + y;
  }
  document.getElementById("demo2").innerHTML = myFunction(5);



//                       Function Rest Parameter   
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
// Function to calculate the sum of any number of arguments
function sum(...args) {
    // Initialize a variable to store the running sum
    let sum = 0;
    // Loop through each argument passed to the function
    for (let arg of args) {
      // Add the current argument to the running sum
      sum += arg;
    }
    // Return the final calculated sum
    return sum;
  }
  // Calculate the sum of multiple numbers using the sum function
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  // Get a reference to the paragraph element with the ID "demo3"
  let paragraph = document.getElementById("demo3");
  // Update the content of the paragraph element with the calculated sum
  paragraph.innerHTML = x;



  //                   The Arguments Object
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).
// This way you can simply use a function to find (for instance) the highest value in a list of numbers:
function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 
  document.getElementById("demo4").innerHTML = findMax(4, 5, 6);


  function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  document.getElementById("demo5").innerHTML = sumAll(1, 123, 500, 115, 44, 88);


//              Arguments are Passed by Value
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.


//                  Objects are Passed by Reference
// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference:
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.

