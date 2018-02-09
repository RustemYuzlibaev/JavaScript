'use strict';

// Functionality of Iterators
let myArray = [1, 2, 3];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next());   // { value: 1, done: false }
console.log(iterator.next());   // { value: 2, done: false }
console.log(iterator.next());   // { value: 3, done: false }
console.log(iterator.next());   // { value: undefined, done: true }
// Simulating in ES5
function createIterator(items) {
  let i = 0;
  return {
    next: function () {
      let done = (i >= items.length);
      let value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value
      };
    }
  };
}

let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());   // { value: 1, done: false }
console.log(iterator.next());   // { value: 2, done: false }
console.log(iterator.next());   // { value: 3, done: false }
console.log(iterator.next());   // { value: undefined, done: true }

// Collection Iterators
let colors = ['red', 'green', 'blue'];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set('firstName', 'Rustem');
data.set('lastName', 'Yuzlibaev');

// entries() iterator
for (let entry of colors.entries()) {
  console.log(entry);
}
for (let entry of tracking.entries()) {
  console.log(entry);
}
for (let entry of data.entries()) {
  console.log(entry);
}
// the following output:
// [ 0, 'red' ]
// [ 1, 'green' ]
// [ 2, 'blue' ]
// [ 1234, 1234 ]
// [ 5678, 5678 ]
// [ 9012, 9012 ]
// [ 'firstName', 'Rustem' ]
// [ 'lastName', 'Yuzlibaev' ]

// values() iterator
for (let value of colors.values()) {    // TypeError: colors.values(...) is not iterable
  console.log(value);
}
for (let value of tracking.values()) {
  console.log(value);
}
for (let value of data.values()) {
  console.log(value);
}
// the following output:
// 1234
// 5678
// 9012
// Rustem
// Yuzlibaev

// keys() iterator
for (let value of colors.keys()) {
  console.log(value);
}
for (let value of tracking.keys()) {
  console.log(value);
}
for (let value of data.keys()) {
  console.log(value);
}
// the following output:
// 0
// 1
// 2
// 1234
// 5678
// 9012
// firstName
// lastName
