// Constructor is a special method used to initialize a newly created object

// Old Syntax
var Course = function(title, author) {
  this.title = title;
  this.author = author;
};

// a single instance of toString() will now be shared between all objects
Course.prototype.toString = function() {
  console.log(this.title + ' ... Author: ' + this.author);
};

var course_1 = new Course('ES5', 'Author1');
var course_2 = new Course('ES6', 'Author2');

// New Syntax
class Course {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return this.title + ' ... Author: ' + this.author;
  }
}

const course_1 = new Course('ES5', 'Author1');
const course_2 = new Course('ES6', 'Author2');
