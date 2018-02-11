'use strict';

// Set is a collection of values, where each value may occur only once.

// Its main methods are:
// new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns 'true'
// if value existed at the moment of the call, otherwise 'false'.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// Iteration over Set
let set = new Set(['Optimus Prime', 'Bumblebee']);

for (let value of set) {
  console.log(value);                  // Optimus Prime, then Bumblebee
}
// the same with forEach:
set.forEach((value, key, ownerSet) => {
  console.log(key + ': ' + value);     // Optimus Prime: Optimus Prime, then Bumblebee: Bumblebee
  console.log(ownerSet === set);       // true, then true
});

// The same methods Map has for iterators are also supported:
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys, exists for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// Converting a Set to an Array
let set = new Set([1, 2, 3, 4, 5, 5, 5]),
    array = [...set];

console.log(array);         // [ 1, 2, 3, 4, 5 ]
// or to already existed array
const eliminateDuplicates = items => [...new Set(items)];
let numbers = [1, 2, 3, 4, 4, 5, 5],
    noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);  // [ 1, 2, 3, 4, 5 ]



// Map is a collection of keyed data items, just like an Object.

// Its main methods are:
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – clears the map
// map.size – returns the current element count.

// Iteration over Map
// For looping over a map, there are 3 methods:
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let robots = new Map([
  ['Optumus Prime', 'Autobot'],
  ['Megatron', 'Decepticon']
]);

// iterate over keys (vegetables)
for (let pacer of robots.keys()) {
  console.log(pacer);           // Optumus Prime, Megatron
}

// iterate over values (amounts)
for (let race of robots.values()) {
  console.log(race);            // Autobot, Decepticon
}

// iterate over [key, value] entries
for (let entry of robots) {     // the same as of robots.entries()
  console.log(entry);           // [ 'Optumus Prime', 'Autobot' ], [ 'Megatron', 'Decepticon' ]
}

// Map from Object
// array of [key, value] pairs
let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);

console.log(map);  // Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
// There is a built-in method Object.entries(obj) that returns an array of
// key/value pairs for an object exactly in that format.
let map = new Map(Object.entries({
  name: 'Rustem',
  age: 20
}));

console.log(map);    // Map { 'name' => 'Rustem', 'age' => 20 }

// ********************************************************************************* //

// WeakMap and WeakSet
// WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory.
// WeakMap is the same thing for Map.
// JavaScript engine stores a value in memory while it is reachable (and can potentially be used).

// Regular Map
let obj = { name: 'Rustem' };

let map = new Map();
map.set(obj, 'smth');

obj = null; // overwrite the reference
// still in memory
console.log(map);  // Map { { name: 'Rustem' } => 'smth' }
// return the original reference back
obj = [...map][0];
console.log(obj);  // [ { name: 'Rustem' }, 'smth' ]

// WeakMap
// Its keys must be objects, not primitive values

// WeakMap has only the following methods:
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key, value)
// weakMap.has(key)
let obj = { name: 'Rustem' };

let map = new WeakMap();
map.set(obj, 'smth');

obj = null; // overwrite the reference
// removed from memory
console.log(map);  // WeakMap {}

// example on WeakMap
// Private Object Data
let Person = (function () {
  let privateData = new WeakMap();

  function Person(name) {
    privateData.set(this, { name })
  }

  Person.prototype.getName = function () {
    return privateData.get(this).name;
  };

  return Person;
}());
// This version of the Person example uses a weak map for the private data istead of an object.
// The Person object instance can be used as a key. When the Person constructor is called,
// a new entry is made into the weak map with a key of 'this' and a value of an object
// containing private information. In this case, that value is an object containing only name.
// The getName() function retrieves that private information by passing 'this' to the
// privateData.get() method, which fetches the value object and accesses the name property
// This technique keeps the private information private and destroys tha information whenever
// an object instance associated with it is destroyed.



// Regular Set
let set = new Set(),
    key = {};

set.add(key);
console.log(set.size);  // 1
// eliminate original reference
key = null;
// still in memory
console.log(set.size);  // 1
// get the original reference back
key = [...set][0];

// Weak Set
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it has reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
let set = new WeakSet(),
    key = {};
// add the object to the set
set.add(key);
console.log(set.has(key));  // true
// eliminate original reference
key = null;
console.log(set.has(key));  // false
