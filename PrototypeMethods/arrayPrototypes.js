'use strict';

// forEach()
let colors = ['green', 'red', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});

const numbers = [0, 1, 2, 3, 4, 5, 6];

// map()
const doubledNumbers = numbers.map(function(n) {
  return n * 2;
});
console.log(doubledNumbers); // [0, 2, 4, 6, 8, 10, 12]

// filter()
const evenNumbers = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log(evenNumbers); // [0, 2, 4, 6]

// reduce()
const sum = numbers.reduce(
  function (acc, n) {
    return acc + n;
  },
  0 // accumulator variable value at first iteration step
);
console.log(sum); // 21

// find()
let x = 4;       // sought-for element
const found = numbers.find(function (number) {
  return x === number;
});
console.log(found); // logs element or underfined if doesn't exist

// some
const numBiggerThan0 = numbers.some(function (number) {
  return number > 0;
});
console.log(numBiggerThan0); // true, since some of them are bigger than 0

// every
const numLessThan6 = numbers.every(function (number) {
  return number < 6;
});
console.log(numLessThan6); // false, since not every are less than 6
