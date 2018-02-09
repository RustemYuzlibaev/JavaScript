'use strict';

// Functionality of Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = generator();

console.log(iterator.next().value);  // 1
console.log(iterator.next().value);  // 2
console.log(iterator.next().value);  // 3
console.log(iterator.next().value);  // undefined

// some example
function* getNextID() {
  let id = 0;
  while (id < 3) {
    yield id++;
  }
}

let createUser = getNextID();
console.log(createUser.next().value);  // 0
console.log(createUser.next().value);  // 1
console.log(createUser.next().value);  // 2
console.log(createUser.next().value);  // underfined

// Delegating Generators
function *createNumberIterator() {
  yield 1;
  yield 2;
}

function *createColorIterator() {
  yield 'red';
  yield 'green';
}

function *createCombineIterator() {
  yield *createNumberIterator();
  yield *createColorIterator();
  yield true;
}

let iterator = createCombineIterator();

console.log(iterator.next());  // { value: 1, done: false }
console.log(iterator.next());  // { value: 2, done: false }
console.log(iterator.next());  // { value: 'red', done: false }
console.log(iterator.next());  // { value: 'green', done: false }
console.log(iterator.next());  // { value: true, done: false }
console.log(iterator.next());  // { value: undefined, done: true }
