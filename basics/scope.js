// There are two types of scopes: Global scope and local scope.
// Variables inside the Global scope can be accessed and altered in any other scope.
// Variables inside the Local scope can be accessed and altered within this scope.

'use strict';

// Global Scope
function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Local Scope #3
}
// Global Scope

// Function Scope
// When you declare a variable in a function, you can access this variable
// only within the function. You can't get this variable once you get out of it.

// Block statements
// The 'let' and 'const' keywords support the declaration of local scope
// inside block statements. 'var' doesn`t
{
    var a = 'I';
    let b = 'Love';
    const c = 'JavaScript';
}

console.log(a); // I
console.log(b); // ReferenceError
console.log(c); // ReferenceError

// Lexical scope
// Lexical Scope means that in a nested group of functions, the inner functions
// have access to the variables and other resources of their parent scope.

function outer() {
  let a;
  // both 'b' and 'c' aren`t accessable
  function inner() {
    let b;
    // 'a' is accessable
    // 'c' isn`t accessable
    function innermost() {
      let c;
      // both 'a' and 'b' are accessable
    }
  }
}

// Public and private scope
// Encapsulating functions from the public (global) scope saves them from vulnerable attacks.
// But in JavaScript, there is no such thing as public or private scope.
// However, we can emulate this feature using closures.
// To keep everything separate from the global we must first encapsulate
// our functions within a function like this:

let module = (function () {
  let _counter = 0;

  let _somePrivateMethod = function () {
    console.log('I`m not accessable');
  }

  let increaseCounter = function () {
    return ++_counter;
  }

  let getCounter = function () {
    return _counter;
  }

  return {
    increaseCounter: increaseCounter,
    getCounter: getCounter
  }
}());

console.log(module.increaseCounter());   // 1, accessable
console.log(module.getCounter());        // 1, accessable
console.log(module._somePrivateMethod);  // underfined, not accessable
console.log(_counter);                  // ReferenceError, not accessable
console.log(module._counter);           // underfined, not accessable
