// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution.

'use strict';

// undefined vs ReferenceError
// An undeclared variable is assigned the value undefined at execution and is also of type undefined.
// A ReferenceError is thrown when trying to access a previously undeclared variable.

// Hoisting variables ****
// Variables with keyword 'var' within a scope are hoisted to the top of the scope.
// Variables with 'let' and 'const' don't
console.log(a);
console.log(b);
console.log(c);

var a = 1;     // underfined
let b = 2;     // ReferenceError
const c = 3;    // ReferenceError

// Hoisting functions ****
// JavaScript functions can be loosely classified as the following:
// 1) Function declarations
// 2) Function expressions
console.log(funDeclaration()); // I`m hoisted
console.log(funExpression());  // ReferenceError

function funDeclaration() {
  return 'I`m hoisted';        // Function declarations are not hoisted.
}

funExpression = function () {
  return 'I`m not';             // Function expressions are not hoisted.
}

// Hoisting Classes ****
// JavaScript classes too can be loosely classified either as:
// 1) Class declarations
// 2) Class expressions

// 1
var Frodo = new Hobbit(); // ReferenceError: Hobbit is not defined
Frodo.height = 100;
Frodo.weight = 300;

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

// 2
let Square = new Polygon();  // ReferenceError: Polygon is not defined
Square.height = 10;
Square.width = 10;

let Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Order of presedence
// 1) Variable assignment (with 'var') takes precedence over function declaration
// 2) Function declarations take precedence over variable declarations (with 'var')

// 1
var double = 22;

function double(num) {
  return (num * 2);
}

console.log(typeof double); // number

// 2
var double;

function double(num) {
  return (num * 2);
}

console.log(typeof double); // function
