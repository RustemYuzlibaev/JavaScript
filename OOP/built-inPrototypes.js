'use strict';

let arr = [1, 2, 3];
arr.__proto__ === Array.prototype;              // true
arr.__proto__.__proto__ === Object.prototype;   // true
arr.__proto__.__proto__.__proto__;              // true

function f() {};
f.__proto__ === Function.prototype;             // true
f.__proto__.__proto__ === Object.prototype;     // true

// Primitives
// The most intricate thing happens with strings, numbers and booleans.
// As we remember, they are not objects. But if we try to access their properties,
// then temporary wrapper objects are created using built-in constructors String, Number, Boolean,
// they provide the methods and disappear.
// Methods of these objects also reside in prototypes, available as String.prototype,
// Number.prototype and Boolean.prototype.

// Built-in Object Prototypes
Array.prototype.sum = function () {
  return this.reduce(function (curr, next) {
    return curr + next;
  });
};

let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers.sum();
console.log(result);  // 21

String.prototype.pepeat = function (times) {
  return new Array(times + 1).join(this)
};

let fruit = 'Blah'.repeat(3);
console.log(fruit);  // BlahBlahBlah
// Built-in prototypes can be modified or populated with new methods.
// But it’s not recommended to change them. Probably the only allowable cause is when
// we add-in a new standard, but not yet supported by the engine JavaScript method.
