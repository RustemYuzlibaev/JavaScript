'use strict';

// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation, and its resulting value.

let p1 = new Promise(function(resolve, reject) {
  let variable = false;

  if (variable) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

p1.then(
  function(value) {
    console.log(value);
  },

  function(value) {
    console.error(value); // rejected
  }
);

// or
// promise.then(value => console.log(value)).catch(value => console.error(value));

let p2 = Promise.resolve('p2 resolved');
let p3 = () => Promise.resolve('p3 resolved');
let p4 = () => Promise.reject('p4 rejected');

p1
  .then(result => {
    console.log('p1:', result);
  })
  .catch(result => {
    console.log('p1:', result); // p1: rejected
  });

p2.then(result => {
  console.log('p2:', result); // p2: p2 resolved
});

p3().then(result => {
  console.log('p3:', result); // p3: p3 resolved
});

p4().then(null, result => {
  console.log('p4:', result); // p4: p4 rejected
});

// Methods

// Promise.all(iterable)
// Returns a promise that either fulfills when all of the promises in the iterable
// argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects.
// If the returned promise fulfills, it is fulfilled with an array of the values from
// the fulfilled promises in the same order as defined in the iterable.
// If the returned promise rejects, it is rejected with the reason from the first
// promise in the iterable that rejected. This method can be useful
// for aggregating results of multiple promises.

let p1 = () => Promise.resolve('Got the list of users');
let p2 = () => Promise.resolve('Got the list of posts');
let p3 = Promise.resolve('Got the list of likes');

Promise.all([p1(), p2(), p3])
  .then(resultsAr => {
    console.log(resultsArr[1]);
    console.log(resultsArr[0]);
    console.log(resultsArr[2]);
  })
  .catch(err => {
    console.log('One of them or several were rejected');
  });

// Promise.race(iterable)
// Returns a promise that fulfills or rejects as soon as one of the promises in the iterable
// fulfills or rejects, with the value or reason from that promise.
let p1 = Promise.resolve('Load from #1 resource');
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Load from #2 resource');
});
let p3 = Promise.resolve('Load the same resource from another source');

Promise.race([p2, p3, p1])
  .then(responce => {
    console.log(responce); // Load the same resource from another source
  })
  .catch(err => console.log(err));

// the only reason it's useful when you extract the same resource from different places, and
// you can deal with the response from any one that is the fastest and discard everything else

// Examples
let calculation = new Promise(function(resolve, reject) {
  resolve(1 + 1);
});

calculation
  .then(function(value) {
    return value + 2;
  })
  .then(function(value) {
    console.log('The final value is', value); // The final value is 4
  });
