// Function Expressions
// A JavaScript function can also be defined using an expression.

//anonymous function (a function without a name).
const x = 
    function (a, b) {
        return a * b
    };
    document.getElementById("functionExpression1").innerHTML = x(4, 3);


// The Function() Constructor
// Functions can also be defined with a built-in JavaScript function constructor called Function().
const myFunction1 = 
    new Function("a", "b", "return a * b");
    document.getElementById("functionExpression2").innerHTML = myFunction1(4, 3);

   
// You actually don't have to use the function constructor. The example above is the same as writing:
const myFunction2 = 
    function (a, b) {
        return a * b
    };
    document.getElementById("functionExpression3").innerHTML = myFunction2(4, 3);


