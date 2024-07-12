function myFunction1(a, b) {
    return a * b;
  }
  document.getElementById("demo1").innerHTML = myFunction1(10, 2);   //20



  function myFunction2(a, b) {
    return a * b;
  }
  document.getElementById("demo2").innerHTML = window.myFunction2(10, 2);     //20




//                           What is this?
// In JavaScript, the this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


//                            The Global Object
// When a function is called without an owner object, the value of this becomes the global object.
// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:

let x = myFunction3();
function myFunction3() {
  return this;
}
document.getElementById("demo3").innerHTML = x;   //[object Window]


//                 Invoking a Function as a Method
// In JavaScript you can define functions as object methods.
// The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
const myObject1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo4").innerHTML = myObject1.fullName();  //John Doe


//   The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
// The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
// Test it! Change the fullName method to return the value of this:
const myObject2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this;
    }
  }
  document.getElementById("demo5").innerHTML = myObject2.fullName();      //[object Object]


//   Invoking a Function with a Function Constructor
// If a function invocation is preceded with the new keyword, it is a constructor invocation.
// It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
function myFunction4(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  const myObj = new myFunction4("John","Doe")
  document.getElementById("demo6").innerHTML = myObj.firstName;          //John

//   A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
//   The this keyword in the constructor does not have a value.
//   The value of this will be the new object created when the function is invoked.

