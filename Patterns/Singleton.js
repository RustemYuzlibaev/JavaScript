// The Singleton pattern is thus known because it restricts instantiation of
// a class to a single object

var mySingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    var privateVariable = 'I am also private';
    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function() {
        console.log('The public can see me!');
      },

      publicProperty: 'I am also public',

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // Get the Singleton instance of one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

singleA.getRandomNumber() === singleB.getRandomNumber(); // true
