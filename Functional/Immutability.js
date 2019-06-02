let x = 2;
x++; // allowed

const y = 3;
y++; // allowed

const z = [4, 5, 6];
z = 10; // not allowed
z[0] = 10; // not allowed

const w = Object.freeze([4, 5, 6]);
w = 10; // not allowed
w[0] = 10; // not allowed
