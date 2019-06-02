// Composition
const f = x => x + 2;
const g = x => x * 3;
console.log('f(g(5))', f(g(5)));
console.log('g(f(5))', g(f(5)));

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str} ${str}`;

// #1
console.log(repeat(exclaim(scream('Life is life'))));

// #2
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const doStuff = compose(
    repeat,
    exclaim,
    scream,
);
console.log(doStuff('Life is life'));

// #3
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const doStuff2 = pipe(
    scream,
    exclaim,
    repeat,
);

console.log(doStuff('Life is life'));
