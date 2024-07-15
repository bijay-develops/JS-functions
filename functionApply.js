// The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter).
// In this example the fullName method of person is applied on person1:
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName ;
    }
  }
const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
document.getElementById("demo1").innerHTML = person.fullName.apply(person1); 




// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const personA = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const personA1 = {
    firstName : "Bijay",
    lastName : "B.K."
}
const personA2 = {
    firstName : "Ram",
    lastName : "Bahadur"
}
document.getElementById("demo2").innerHTML = personA.fullName.call(personA1, "Bardiya", "Nepal");




// The apply() Method with Arguments
// The apply() method accepts arguments in an array:
const personB = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  }
  const personB1 = {
    firstName:"Ram",
    lastName: "Bahadur"
  }
  document.getElementById("demo3").innerHTML = personB.fullName.apply(personB1, ["Kathmandu", "Nepal"]);




//   Compared with the call() method:
const personC = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  }
  
  const personC1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const personC2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo4").innerHTML = personC.fullName.call(personC1, "Oslo", "Norway"); 




//   Simulate a Max Method on Arrays
// You can find the largest number (in a list of numbers) using the Math.max() method:
document.getElementById("demo5").innerHTML = Math.max(1,2,3); 

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
document.getElementById("demo6").innerHTML = Math.max.apply(null, [1,2,3]); 

// The first argument (null) does not matter. It is not used in this example.
// These examples will give the same result:
document.getElementById("demo7").innerHTML = Math.max.apply(Math, [1,2,3]); 

document.getElementById("demo8").innerHTML = Math.max.apply(" ", [1,2,3]);

document.getElementById("demo9").innerHTML = Math.max.apply(0, [1,2,3]);



// JavaScript Strict Mode
// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
