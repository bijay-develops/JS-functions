// Function Borrowing
// With the bind() method, an object can borrow a method from another object.
// The example below creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  let fullName = person.fullName.bind(member);
  document.getElementById("demo1").innerHTML = fullName();



// Preserving this
// Sometimes the bind() method has to be used to prevent losing this.
// In the following example, the person object has a display method. In the display method, this refers to the person object:
const personA = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("demo2");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  personA.display();

//   When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead:
const personB = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("demo3");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  setTimeout(personB.display, 3000);     //undefined undefined 



//   The bind() method solves this problem.
// In the following example, the bind() method is used to bind person.display to person.
// This example will display the person name after 3 seconds:
const personC = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  let display = personC.display.bind(person);
  setTimeout(display, 3000);                // John Doe

