// The module pattern encapsulates "privacy", state and organization using closure.
// It provides a way of wrapping a mix of public and private methods and variables,
// protecting pieces from leaking into the global scope and accidentally colliding with
// another developer's interface

// Basic module
var Module = {
  methodOne: function() {},
  methodTwo: function() {},
  methodThree: function() {}
};

// Example
var testModule = (function() {
  var counter = 0;

  return {
    incrementCounter: function() {
      return counter++;
    },

    resetCounter: function() {
      console.log('counter value prior to reset: ' + counter);
      counter = 0;
    }
  };
})();

// Usage:
testModule.incrementCounter();
testModule.resetCounter();

// Revealing Module
var myRevealingModule = (function() {
  var privateVar = 'Rustem Yuzlibaev',
    publicVar = 'Hi there!';

  function privateFunction() {
    console.log('Name: ' + privateVar);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Reveal public pointers to private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();

myRevealingModule.setName('Rustem Yuzlibaev');
myRevealingModule.getName();
