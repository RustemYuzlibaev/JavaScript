'use strict';

// Iterator is an object designed to iterate over another object

// Functionality of Iterators
let myString = 'abc';
let iterator = myString[Symbol.iterator]();

iterator.next(); // { value: a, done: false }
iterator.next(); // { value: b, done: false }
iterator.next(); // { value: c, done: false }
iterator.next(); // { value: undefined, done: true }

let myArray = [1, 2, 3];
let iterator = myArray[Symbol.iterator]();

iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: undefined, done: true }

// Simulating in ES5
function createIterator(items) {
  let i = 0;
  return {
    next: function() {
      let done = i >= items.length;
      let value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value
      };
    }
  };
}

let iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// The following values are iterable
// Arrays
// Strings
// Maps
// Sets
// DOM data structures
