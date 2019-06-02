"use strict";

// Constructor function vs Factory function
function ConstructorFunction() {
  this.someProp1 = "1";
  this.someProp2 = "2";
}
ConstructorFunction.prototype.someMethod = function() {
  /* whatever */
};

function factoryFunction() {
  let obj = {
    someProp1: "1",
    someProp2: "2"
  };
  // other code to manipulate obj in some way here
  return Object.create({ someMethod: function() {} });
}

let objFromConstructor = new ConstructorFunction();
let objFromFactory = factoryFunction();
