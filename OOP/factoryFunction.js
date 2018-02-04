'use strict';

// Constructor function vs Factory function
function ConstructorFunction() {
   this.someProp1 = '1';
   this.someProp2 = '2';
}
ConstructorFunction.prototype.someMethod = function () { /* whatever */ };


function factoryFunction() {
   let obj = {
      someProp1: '1',
      someProp2: '2',
      someMethod: function () { /* whatever */ }
   };
   // other code to manipulate obj in some way here
   return obj;
}


let objFromConstructor = new ConstructorFunction();
let objFromFactory = factoryFunction();
