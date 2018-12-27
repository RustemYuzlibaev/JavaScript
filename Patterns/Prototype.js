// Prototype pattern as being based on prototypal inheritance where we create
// objects which act as prototypes for other objects

const Character = {
  talk: function(...msg) {
    console.log(msg.join(' '));
  }
};
// Human
const Human = Object.create(Character, {
  speed: { value: 3 },
  name: { value: 'Name' }
});

Human.walk = function() {
  this.talk(this.name, 'is walking');
};
Human.ski = function() {
  this.talk(this.name, 'is skiing');
};
// Robot
const Robot = Object.create(Character, {
  speed: { value: 8 },
  id: { value: 'ID' }
});

Robot.drive = function() {
  this.talk(this.id, 'is driving \u26A1');
};
Robot.wifi = function() {
  this.talk(this.id, 'is connecting \u26A1');
};

const rustem = Object.create(Human, { name: { value: 'Rustem' } });
rustem.walk(); // Rustem is walking
rustem.ski(); // Rustem is skiing
rustem.talk('Hello from me'); // Hello from me

const x73 = Object.create(Robot, { id: { value: 'x73' } });
x73.drive(); // x73 is driving ⚡
x73.wifi(); // x73 is connecting ⚡
x73.talk('Hello from robot'); // Hello from robot
