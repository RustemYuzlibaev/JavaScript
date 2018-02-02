'use strict';

// Methods pop/push, shift/unshift
let companies = ['Apple', 'Samsung', 'LG'];

companies.shift(); // remove Apple and return it
console.log(companies); // Samsung, LG

companies.unshift('Apple');
console.log(companies); // Apple, Samsung, LG

companies.pop(); // remove LG and return it
console.log(companies); // Apple, Samsung

companies.push('LG');
console.log(companies); //  Apple, Samsung, LG


// Method splice
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log(arr); // ["Let's", "dance", "right", "now"]

// Method slice
let arr = ["t", "e", "s", "t"];
arr.slice(1, 3); // e, s
arr.slice(-2);   // s, t


// Method concat
let arr = [1, 2];

// merge arr with [3,4]
arr.concat([3, 4]); // 1,2,3,4
// merge arr with [3,4] and [5,6]
arr.concat([3, 4], [5, 6]); // 1,2,3,4,5,6
// merge arr with [3,4], then add values 5 and 6
arr.concat([3, 4], 5, 6); // 1,2,3,4,5,6


// Method indexOf/lastIndexOf and includes
// arr.indexOf(item, from) looks for item starting from index from,
// and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
let arr = [1, 0, false];

arr.indexOf(0); // 1
arr.indexOf(false); // 2
arr.indexOf(null); // -1

arr.includes(1); // true


// Method sort
let arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });
console.log(arr); // 1, 2, 15


// Method reverse
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // 5,4,3,2,1


// Method split/join
let names = 'Optimus Prime, Jazz, Bumblebee';
let arr = names.split(', ');
for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Optimus Prime  (and other names)
}

let arr = ['Optimus Prime', 'Jazz', 'Bumblebee'];
let str = arr.join('; ');
console.log(str); // Optimus Prime; Jazz; Bumblebee
