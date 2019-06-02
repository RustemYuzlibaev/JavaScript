// This is a keyword whose value changes depending on how a function gets called.
// There are six different ways where 'this' can take on new values.
// 1. 'this' in global context
// 2. 'this' in object constructor
// 3. 'this' in an object method
// 4. 'this' in a simple function
// 5. 'this' in an arrow funciton
// 6. 'this' in an event listener

'use strict';

// 1
console.log(this); // Window

// 2
function Human(age) {
  this.age = age;
}

let me = new Human(20);
let you = new Human(3);

console.log(me); // this.age = 20
console.log(you); // this.age = 3

// 3
const object3 = {
  sayThis() {
    console.log(this);
  }
};

object3.sayThis(); // object

// 4
function simpleFunction() {
  console.log(this);
}

const object4 = {
  sayThis() {
    simpleFunction();
  }
};

simpleFunction(); // Window
object4.sayThis(); // Window
// On browsers, 'this' is always set to Window in a simple function. The same is
// true even if you call a simple function in an object method.

// another example (and how to avoid it)
const obj4 = {
  doSomething: function() {
    let self = this; // refers to object itself

    (function callPrintFunction() {
      self.printSomething(); // this.printSomething, 'this' would be set to Window
    })();
  },

  printSomething: function() {
    console.log('I`m callable');
  }
};

obj4.doSomething(); // I`m callable

// 5
// same principle but without 'self'
const object5 = {
  doSomething: function() {
    // 'this' in arrow function
    const callPrintFunction = () => this.printSomething(); // is always the same as
    callPrintFunction(); // 'this' around it
  },

  printSomething: function() {
    console.log('I`m callable');
  }
};

object5.doSomething(); // I`m callable

// 6
let button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // button
});
