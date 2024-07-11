// Functions are Objects
// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.
// The arguments.length property returns the number of arguments received when the function was invoked:

function myFunction(a, b) {
    return arguments.length;
  }
  document.getElementById("functionsAreObjects1").innerHTML = myFunction(4, 3);


  
  function myFunction(a, b) {
    return a * b;
  }
  document.getElementById("functionsAreObjects2").innerHTML = myFunction.toString();
//   The toString() Method
// The toString() method returns the function as a string:

// function myFunction(a, b) { return a * b; }