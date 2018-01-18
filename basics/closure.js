// A closure is a function that remembers its outer variables and can access them.

'use strict';

// ******************************************************** //

function showName(firstName, lastName) {
  let nameIntro = 'Your name is ';
  // this inner function has access to the outer function's variables,
  // including the parameter​s
  function makeFullName() {
    return nameIntro + firstName + ' ' + lastName;
  }

  return makeFullName();
}

showName('Micheal', 'Jackson'); // Your name is Micheal Jackson
// ******************************************************** //

// Closure VS Scope
// scope: global
let a = 1;
(function one() {
  // scope: one
  // closure: [one, global]
  let b = 2;
  (function two() {
    // scope: two
    // closure: [two, one, global]
    let c = 3;
    (function three() {
      // scope: three
      // closure: [three, two, one, global]
      let d = 4;
      console.log(a + b + c + d); // 10
    }());
  }());
}());
// ******************************************************** //

// Emulating private methods with closures
let counter = (function () {
  let _privateCounter = 0;
  function _changeBy(val) {
    _privateCounter += val;
  }
  return {
    increment: function () {
      _changeBy(1);
    },
    decrement: function () {
      _changeBy(-1);
    },
    value: function () {
      return _privateCounter;
    }
  }
})();

counter.increment(); // 1
counter.decrement(); // 0
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value()); // 2
// ******************************************************** //
