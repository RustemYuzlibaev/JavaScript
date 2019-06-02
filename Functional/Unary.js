// Helper that wraps a function call to ensure only one argument will pass through
const unary = fn => arg => fn(arg);

['1', '2', '3'].map(parseInt); // [ 1, NaN, NaN ]
['1', '2', '3'].map(unary(parseInt)); // [ 1, 2, 3 ]
