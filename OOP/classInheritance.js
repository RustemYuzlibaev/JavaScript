'use strict';

// Class inheritance
class Vehicle {
  constructor() {
    console.log('constructing Vehicle');
  }
}

class Car extends Vehicle {
  constructor() {
    super(); // The 'super' keyword is used to access and call functions on an object's parent.
    console.log('constructing Car');
  }
}

let c = new Car('A123'); // constructing Vehicle
                         // constructing Car
// Examples on 'super'
// 1
class Vehicle {
  constructor(licenseNum) {
    this.licenseNum = licenseNum;
  }
}

class Car extends Vehicle {
  constructor(licenseNum, price) {
    super(licenseNum);
    this.price = price;
  }
}

let c = new Car('343', '6000$');
console.log(c.licenseNum); // 343
console.log(c.price);      // 6000$

// 2
class Vehicle {
  start() {
    console.log('starting Vehicle');
  }
  static getCompanyName() {
    console.log('My Company');
  }
}

class Car extends Vehicle {
  start() {
    console.log('starting Car');
    super.start();
  }
  static getCompanyName() {
    console.log('My Subsidiary Company');
    super.getCompanyName();
  }
}

let c = new Car();
c.start();             // starting Car
                       // starting Vehicle
Car.getCompanyName();  // My Subsidiary Company
                       // My Company
c.getCompanyName();    // TypeError
