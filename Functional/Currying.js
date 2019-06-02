// The advantage of currying is that each call to pass in an argument produces another f-n
// that we can capture and use that new function later in the program,
// whereas traditional function calls require all the arguments to be present at the same time
// Another benefit is the composition of functions is much easier when there's only one arg

function greet(msg) {
    return function(name) {
        console.log(msg, name);
    };
}

let english = greet('Hi');
// ... later in the program
english('Rustem');

// manually
const curry1 = f => a => (...rest) => f(a, ...rest);
const curry2 = f => a => b => (...rest) => f(a, b, ...rest);

// automatically
const curry = f => curryN(f, []);
const curryN = (f, acc) =>
    acc.length === f.length ? f(...acc) : arg => curryN(f, [...acc, arg]);
// Application sequence:
// curry ( volume )
// curryN ( volume, [])
// a => curryN( volume, [a] )
// a => b => curryN( volume, [a, b] )
// a => b => c => curryN( volume, [a, b, c] )
// a => b => c => volume(a, b, c)

const volume = (a, b, c) => a * b * c;

console.log('curry', curry(volume)(2)(3)(4));
