// When not to use an Arrow Function

// In EventListener
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  this.classList.toggle('on'); // 'this' is Window's object
});

// When you need a method to bind to an object
const person = {
  points: 0,
  score: () => {
    this.points++; // 'this' is Window's object
  }
};

// When you need to add a prototype method
class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const beemer = new Car('bmw', 'black');
const subie = new Car('subaru', 'white');

Car.prototype.summarize = () => {
  return `This car is a ${this.make} in the color ${this.color}`; // undefined, undefined
};

// When you need arguments object
const orderGoods = () => {
  const goods = Array.from(arguments); // arguments is not defined
  return goods.map((item, i) => {
    return `${item} was #${i + 1}`;
  });
};
