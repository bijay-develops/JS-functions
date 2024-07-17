// Global Variables
// A function can access all variables defined inside the function, like this:

myFunction();
function myFunction(){
    let a = 4;
    document.getElementById("demo1").innerHTML = a * a;
}


// But a function can also access variables defined outside the function, like this:
let a = 4;
myFunctionA();
function myFunctionA() {
  document.getElementById("demo2").innerHTML = a * a;
} 



// In a web page, global variables belong to the page.
// Global variables can be used (and changed) by all other scripts in the page.
// In the first example, a is a local variable.
// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.
// Global and local variables with the same name are different variables. Modifying one, does not modify the other.
myFunctionB();
document.getElementById("demo3").innerHTML = a * a;
function myFunctionB() {
  a = 4;
} 





// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.
// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.
// You could use a global variable, and a function to increase the counter:

//Initiate counter
let counterA = 0;

//function to increment counter
function add(){
    counterA += 1;
}
//Calling add() 4 times
add();
add();
add();
add();
add();
document.getElementById("demo4").innerHTML = "The contemporary counter is: " + counterA;
 


//    JavaScript Nested Functions
// All functions have access to the global scope.  
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope "above" them.
// In this example, the inner function plus() has access to the counter variable in the parent function:

function addA(){
    let counterB = 0;
    function plus(){
        counterB += 1;   
    }
    plus();
    return counterB;
}
document.getElementById("demo5").innerHTML = addA();

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.


// JavaScript Closures
// Remember self-invoking functions? What does this function do?
const addB = (
    function (){
        let counterC = 0;
        return function(){
            counterC += 1;
            return counterC;
        }
    }
)();
function myFunctionX(){
    document.getElementById("demo6").innerHTML = addB();
}


// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
// A closure is a function having access to the parent scope, even after the parent function has closed.

