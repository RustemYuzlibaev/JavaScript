'use strict';

// mixin
let groupOfMethods = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}
// copy the methods
Object.assign(User.prototype, groupOfMethods);
// now User has sayHi()
new User('Rustem').sayHi(); // Hello Rustem


// mixin function
function mixin(receiver, supplier) {
  for (let property in supplier) {
    if (supplier.hasOwnProperty(property)) {
     receiver[property] = supplier[property];
      }
    }
  return receiver;
}


// mixin with classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function withDisplayName(Superclass) {
  return class extends Superclass {
    displayName() {
     console.log(this.name);
    }
  };
}

class ExtendedPerson extends withDisplayName(Person) {
  constructor(name, age) {
    super(name, age);
  }
}

let person = new ExtendedPerson('Rustem', 20);
person.displayName(); // Rustem
