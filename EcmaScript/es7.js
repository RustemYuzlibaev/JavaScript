// Object.values() / Object.entries()

Object.values({ prop1: 1, prop2: 2 }); // [1, 2]
Object.entries({ prop1: 1, prop2: 2 }); // [['prop1', 1], ['prop2', 2]]

// .padStart(maxLength, [padValue]), .padEnd(maxLength, [padValue])

'string'.padStart(10, '*'); // ****string
'string'.padEnd(10, '*'); // string****

// getOwnPropertyDescriptors()
var obj = {
  prop1: 1,
  prop2: 2
};

Object.getOwnPropertyDescriptors(obj);
// { prop1: { value: 1, writable: true, enumerable: true, configurable: true },
//   prop2: { value: 2, writable: true, enumerable: true, configurable: true } }
