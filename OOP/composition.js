'use strict';

// Inheritance vs Compisition
const Character = {
  talk: function (...msg) {
    console.log(msg.join(' '));
  }
};
// Human
const Human = Object.create(Character, {
  speed: { value: 3 },
  name: { value: 'Name' }
});

Human.walk = function () {
  this.talk(this.name, 'is walking')
};
Human.ski = function () {
  this.talk(this.name, 'is skiing')
};
// Robot
const Robot = Object.create(Character, {
  speed: { value: 8 },
  id: { value: 'ID' }
});

Robot.drive = function () {
  this.talk(this.id, 'is driving \u26A1')
};
Robot.wifi = function () {
  this.talk(this.id, 'is connecting \u26A1')
};

const rustem = Object.create(Human, { name: { value: 'Rustem' } });
rustem.walk();  // Rustem is walking
rustem.ski();   // Rustem is skiing
rustem.talk('Hello from me');  // Hello from me

const x73 = Object.create(Robot, { id: { value: 'x73' } });
x73.drive();  // x73 is driving ⚡
x73.wifi();   // x73 is connecting ⚡
x73.talk('Hello from robot');  // Hello from robot

// It's difficult to add 'Cyborg' which has some methods from 'Human' and others
// from 'Robot'. Since it's neeeded to add to the 'Character' these methods
// Composition is the solution

const talker = (state) => ({
  talk: (...msg) => console.log(msg.join(' '))
});

const walker = (state) => ({
  walk: () => {
    let denotation = state.name || state.id;
    console.log(denotation, 'is walking');
  }
});

const skier = (state) => ({
  ski: () => {
    let denotation = state.name || state.id;
    console.log(denotation, 'is skiing');
  }
});

const driver = (state) => ({
  drive: () => {
    let denotation = state.name || state.id;
    console.log(denotation, 'is driving \u26A1');
  }
});

const wifier = (state) => ({
  wifi: () => {
    let denotation = state.name || state.id;
    console.log(denotation, 'is connecting \u26A1');
  }
});

const Person = (name, speed = 3) => {
  let state = {
    name,
    speed
  };
  return Object.assign({},
                       talker(state),
                       walker(state),
                       skier(state));
};

let anotherRustem = Person('Rustem');
anotherRustem.walk();  // Rustem is walking
anotherRustem.ski();   // Rustem is skiing
anotherRustem.talk('Hello from me');  // Hello from me

let Android = (id, speed = 6) => {
  let state = {
    id,
    speed
  };
  return Object.assign({},
                       talker(state),
                       driver(state),
                       wifier(state));
};

let k45 = Android('k45');
k45.drive();  // x73 is driving ⚡
k45.wifi();   // x73 is connecting ⚡
k45.talk('Hello from robot');  // Hello from robot
// and finally
const Cyborg = (name, speed) => {
  let state = {
    name,
    speed
  };
  return Object.assign({},
                       talker(state),
                       walker(state),
                       wifier(state));
};

let RoboMan = Cyborg('RoboMan', 9);
RoboMan.walk();  // RoboMan is walking
RoboMan.wifi();  // RoboMan is connecting ⚡
