'use strict';

// Prototypal inheritance
let animal = {
  eats: true,
  walk() {
    // this method won't be used by rabbit
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// 1. The references can't go in circles. JavaScript will throw an error
// if we try to assign __proto__ in a circle
// 2. The value of __proto__ can be either an object or null.
// All other values (like primitives) are ignored

rabbit.walk = function() {
  console.log('Rabbit! Bounce-bounce');
};

rabbit.walk(); // Rabbit! Bounce-bounce
// this call finds method immediately in the object, without using the prototype

// * In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// * We can use obj.__proto__ to access it (there are other ways too, to be covered soon).
// * The object referenced by [[Prototype]] is called a “prototype”.
// * If we want to read a property of 'obj' or call a method, and it doesn’t exist,
// then JavaScript tries to find it in the prototype. Write/delete operations work directly on the object,
// they don’t use the prototype (unless the property is actually a setter).
// * If we call obj.method(), and the method is taken from the prototype, 'this' still references obj.
// So methods always work with the current object even if they are inherited.

// The [[Prototype]] property
let object = {};
let prototype = Object.getPrototypeOf(object);

prototype === Object.prototype; // true
Object.prototype.isPrototypeOf(object); // true
object.__proto__ === Object.prototype; // true

// Using Prototypes with Constructors
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

let person1 = new Person('me');
let person2 = new Person('you');

Person.prototype.constructor === Person; // true
person1.constructor === Person; // true
person1.__proto__ === Person.prototype; // true

person1.sayName(); // me
person2.sayName(); // you
// Storing other types of data on the prototype. They are shared across instances
Person.prototype.favorites = [];
person1.favorites.push('pizza');
person2.favorites.push('salad');
// they point to the same array!
console.log(person1.favorites); // [ pizza, salad ]
console.log(person2.favorites); // [ pizza, salad ]

// Using Object.seal() or Object.freeze() on an object, you are acting solely on the
// object instance and the own properties. It's forbidden to add new own properties
// or change existing own properties on frozen objects, but you can certainly still
// add properties on the prototype and continue extending objects
let person1 = new Person('me');
let person2 = new Person('you');

Object.freeze(person1);

Person.prototype.sayHi = function functionName() {
  console.log('Hi');
};

person1.sayHi(); // Hi
person2.sayHi(); // Hi

// Object.create()
let anotherObject = {
  a: 2
};

let myObject = Object.create(anotherObject);
for (let k in myObject) {
  console.log('found: ' + k);
}
// found: a
console.log('a' in myObject); // true, 'in' will check the entire chain (regardless of enumerability)

// prototype-style code
// ---- Parent Class ----
// Parent Constructor
function Animal(name) {
  this.name = name;
  this.speed = 0;
}
// Methods are stored in the prototype
Animal.prototype.run = function() {
  console.log(`${this.name} runs`);
};
// ---- Descendant Class ----
// Descendant Constructor
function Rabbit(name) {
  this.name = name;
  this.speed = 0;
  // or just Animal.apply(this, arguments);
}
// Inheritance. It's assigned immediately after constructor, otherwise
// it will overwrite the methods already written in the prototype
Rabbit.prototype = Object.create(Animal.prototype);
// or Object.setPrototypeOf(Rabbit.prototype, Animal.prototype); (ES6)
// or Rabbit.prototype.__proto__ = Animal.prototype;
// To save constructor
Rabbit.prototype.constructor = Rabbit;
// Methods of descendants
Rabbit.prototype.run = function() {
  // Parent method call within its own
  Animal.prototype.run.apply(this);
  console.log(`${this.name} also jumps`);
};
// Now it's possible to create an instance
let rabbit = new Rabbit('King');
rabbit.run(); // King runs
// King also jumps

// Each constructor is a function that has a property named "prototype"
// that is used to implement prototype-based inheritance and shared properties

// Every object created by a constructor has an implicit reference (called the object's prototype) to
// the value of its constructor's "prototype" property.
// A prototype may have a non-null implicit reference to its prototype, and so on; this is called the prototype chain
