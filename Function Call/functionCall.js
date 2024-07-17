// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo1").innerHTML = myObject.fullName();



//               The JavaScript call() Method
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.
// This example calls the fullName method of person, using it on person1:

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo2").innerHTML = person.fullName.call(person2); 


// The call() Method with Arguments
// The call() method can accept arguments:
const personA = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const personA1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const personA2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo3").innerHTML = personA.fullName.call(personA1, "Oslo", "Norway"); 
