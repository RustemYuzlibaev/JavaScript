'use strict';

// class basics
class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  fly() {
    console.log(`Drone ${this.id} is flying`);
  }
  static getCompany() {
    console.log('Company');
  }
}

Drone.maxHeight = 2000; // Static (class) property
let drone1 = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Flier');

console.log(Drone.maxHeight);  // 2000
console.log(drone1.maxHeight); // undefined, belongs only to class

drone1.fly();    // Drone A123 is flying
drone2.fly();    // Drone B456 is flying

Drone.getCompany();       // Company
drone1.getCompany();      // TypeError, since 'static' is used (static method)

// getters and setters
class Drone {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

let drone = new Drone('A123');
console.log(drone.id);    // A123
drone.id = 'B456';
console.log(drone.id);    // B456

// new.target
// new.target is a new value available in all functions, though in normal functions
// it will always be undefined. In any constructor, new.target always points at
// the constructor 'new' directly invoked, even if the the constructor is in a parent
// class and was delegated to by a super() call from a child constructor
class Foo {
  constructor() {
    console.log('Foo: ', new.target.name);
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log('Bar: ', new.target.name);
  }
  baz() {
    console.log('baz: ', new.target);
  }
}

let a = new Foo();    // Foo: Foo

let b = new Bar();    // Foo: Bar
                      // Bar: Bar
b.baz();              // baz: undefined
