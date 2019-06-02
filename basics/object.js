'use strict';

// Simple primitives (string, number, boolean, symbol, null, and undefined)
// are not themselves objects

// Built-in Objects
// There are several other object sub-types, usually referred to as built-in objects:
// String, Number, Boolean, Object, Function, Array, Date, RegExp, Error

let strPrimitive = 'I am a string';
typeof strPrimitive; // string
strPrimitive instanceof String; // false

let strObject = new String('I am a string');
typeof strObject; // object
strObject instanceof String; // true

// Deep and Shallow copy
let employeeOriginal = {
  name: 'me',
  age: 20,
  profession: 'Software Engineer'
};
// shallow copy
let employeeDuplicate = employeeOriginal;

employeeDuplicate.age = 21;
console.log(employeeOriginal.age); // 21
console.log(employeeDuplicate.age); // 21

// deep copy
let employeeDuplicate = {
  name: employeeOriginal.name,
  age: employeeOriginal.age,
  profession: employeeOriginal.profession
};

employeeDuplicate.age = 21;
console.log(employeeOriginal.age); // 20
console.log(employeeDuplicate.age); // 21

// Another method by using JSON serialization (deep copy)
// By doing this you will lose any Javascript property that has no equivalent type in JSON,
// like Function or Infinity. Any property that’s assigned to
// undefined will simply be ignored by JSON.stringify, causing them to be missed
// on the cloned object.
// This only works if you do not have any inner objects and functions, but just values
let employeeDuplicate = JSON.parse(JSON.stringify(employeeOriginal));

employeeDuplicate.age = 21;
console.log(employeeOriginal.age); // 20
console.log(employeeDuplicate.age); // 21

// Object.assign(target, object1, object2...)
// method only copies enumerable and own properties from a source object to a target object.
// It assigns properties versus just copying or defining new properties.
// This may make it unsuitable for merging new properties into a prototype
// if the merge sources contain getters.
let employeeDuplicate = Object.assign({}, employeeOriginal);
employeeDuplicate.age = 21;
console.log(employeeOriginal.age); // 20
console.log(employeeDuplicate.age); // 21
// This, however, is merely a shallow copy. If our object contains objects,
// they will remain shared references, which is not what we want:
function mutateDeepObject(obj) {
  obj.a.thing = true;
}

const obj = { a: { thing: false } };
const copy = Object.assign({}, obj);
mutateDeepObject(copy);
console.log(obj.a.thing); // true (not false)

// PropertyDescriptors
// 1) writable – if true, can be changed, otherwise it’s read-only.
// 2) enumerable – if true, then listed in loops, otherwise not listed.
// 3) configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

// Read-only
let myObj1 = {};

Object.defineProperty(myObj1, 'a', {
  value: 2,
  writable: false, // not writable
  configurable: true,
  enumerable: true
});

myObj1.a = 3; // TypeError

// Non-configurable
let myObj2 = {};

Object.defineProperty(myObj2, 'a', {
  value: 2,
  writable: true,
  configurable: false, // not configurable
  enumerable: true
});
// later
Object.defineProperty(myObj2, 'a', {
  value: 3,
  writable: true,
  configurable: true,
  enumerable: true
}); // TypeError
// Nuanced Exception! Even if the property is already configurable: false, writable
// can always be changed from true to false, but not back to true if already false

// Non-enumerable
let myObj3 = {
  a: 2,
  b: 3
};

Object.defineProperty(myObj3, 'b', {
  value: 4,
  writable: true,
  configurable: true,
  enumerable: false
});

for (let key in myObj3) {
  console.log(key); // a
}

// Sealing an object globally
// Property descriptors work at the level of individual properties.
// There are also methods that limit access to the whole object:

// Object.preventExtensions(obj)
// Forbids to add properties to the object.

// Object.seal(obj)
// Forbids to add/remove properties, sets for all existing properties configurable: false.

// Object.freeze(obj)
// Forbids to add/remove/change properties, sets for all existing properties
// configurable: false, writable: false.

// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.

// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden,
// and all existing properties have configurable: false.

// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden,
// and all current properties are configurable: false, writable: false.
