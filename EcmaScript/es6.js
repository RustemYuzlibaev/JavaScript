'use strict';

// *** Spread/rest operator ******************************** //
const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1, 'd', 'e', 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']

function myFunc(x, y, ...params) {
  console.log(x); // a
  console.log(y); // b
  console.log(params); // ['c', 'd', 'e', 'f']
}

myFunc('a', 'b', 'c', 'd', 'e', 'f');

// more examples
// calling with apply()
function doStuff(x, y, z) {
  /* whatever */
}
let args = [0, 1, 2];
doStuff.apply(null, args);
// or simply call with the spread operator
doStuff(...args);

// combine arrays
arr1.push(...arr2); // adds arr2 items to end of array
arr1.unshift(...arr2); // adds arr2 items to beginning of arrays

// using math functions
let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1
// ********************************************************* //

// *** Destructuring *************************************** //
// object
const person = {
  firstName: 'Rustem',
  lastName: 'Yuzlibaev',
  age: 20,
  gender: 'M'
};
// without destructuring
const first = person.firstName;
const age = person.age;
const city = person.city || 'Kazan';
// with destructuring
const { firstName: first, age, city = 'Kazan' } = person;
console.log(age); // 20
console.log(first); // Rustem
console.log(city); // Kazan

// function parameters
// without destructuring
function joinFirstLastName(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return firstName + '-' + lastName;
}
joinFirstLastName(person); // Rustem-Yuzlibaev
// with destructuring
const joinFirstLastName = ({ firstName, lastName }) =>
  firstName + ' ' + lastName;
joinFirstLastName(person); // Rustem-Yuzlibaev

// array
const myArray = ['a', 'b', 'c'];
// without destructuring
const x = myArray[0];
const y = myArray[1];
// with destructuring
const [x, y] = myArray;
console.log(x); // a
console.log(y); // b

// Nested Destructuring
let a1 = [1, [2, 3, 4], 5];
let o1 = { x: { y: { z: 6 } } };

let [a, [b, c, d], e] = a1;
let { x: { y: { z: w } } } = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6

// ********************************************************* //

// ***Template literls ************************************* //
const name = 'Rustem';
`Hello ${name}, the following expression is equal to four: ${2 + 2}`;
// Hello Rustem, the following expression is equal to four: 4

// Tagged template literals
function passThrough(literals, ...substitutions) {
  let result = '';
  console.log(literals); // [ '', ' items cost $', '.' ]
  console.log(substitutions); // [ 10, '2.50' ]
  // run the loop only for the substitution count
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let count = 10,
  price = 0.25,
  message = passThrough`${count} items cost $${(count * price).toFixed(2)}.`;
console.log(message); // 10 items cost $2.50.
// ********************************************************* //

// *** Object Literal Syntax Extensions ******************** //
// Property shorthands
function createPerson(name, age) {
  return {
    // in ES5
    name, // name: name;
    age // age: age
  };
}

// Concise methods
let person = {
  name: 'Rustem', // in ES5
  sayName() {
    // sayName: function() {
    console.log(this.name); //    console.log(this.name)
  } // }
};
// ********************************************************* //
