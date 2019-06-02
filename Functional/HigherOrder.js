// Higher order function
// 1. Accepts a function as an argument
// 2. Returns a new function

function forEach(list, fn) {
    for (const v of list) {
        fn(v);
    }
}

forEach([1, 2, 3, 4, 5], function each(val) {
    console.log(val);
});

// forEach is higher order function because it receives a function as an argument
// A higher-oder function can also output another function, like
function foo() {
    return function inner(msg) {
        return msg.toUpperCase();
    };
}

let result = foo()('Hello');

// or
function foo() {
    return bar(function inner(msg) {
        return msg.toUpperCase();
    });
}

function bar(func) {
    return func('Hello');
}

let result = foo();
console.log(result);

// *************************************************** //

const withCount = fn => {
    let count = 0;

    return (...args) => {
        console.log(`Call count: ${++count}`);
        return fn(...args);
    };
};

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log(countedAdd(1, 2));
console.log(countedAdd(5, 3));
console.log(countedAdd(3, 8));

// ****************************************************** //

const higher = function(f) {
    let _output = f();
    return _output();
};

let x = function() {
    console.log('x');
    return function() {
        console.log('x return value');
    };
};

higher(x);

// ****************************************************** //

const formatCurrency = function(currencySymbol, decimalSeparator) {
    return function(value) {
        const wholePart = Math.trunc(value / 100);
        let fractionPart = value % 100;
        if (fractionPart < 10) fractionPart = '0' + fractionPart;
        return `${currencySymbol}${wholePart}${decimalSeparator}${fractionPart}`;
    };
};

const formatter = formatCurrency('$', '.');
console.log(formatter(1209));
