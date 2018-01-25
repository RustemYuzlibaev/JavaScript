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
console.log(drone1.maxHeight); // underfined, belongs only to class

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
