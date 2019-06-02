"use strict";

// Default Binding ***********
function foo1() {
  console.log(this.a);
}

let a = 1;
foo1(); // TypeError
// ***************************

// Implicit Binding **********
function foo2() {
  console.log(this.b);
}

let obj2 = {
  b: 2,
  foo2
};

obj2.foo2(); // 2
// ***************************

// Explicit Binding **********
function foo3() {
  console.log(this.c);
}

let obj3 = {
  c: 3
};

foo3.call(obj3); // 3
foo3.apply(obj3); // 3
// ***************************

// new Binding ***************
function foo4(d) {
  this.d = d;
}

let bar4 = new foo4(4);
console.log(bar4.d); // 4
// ***************************

// ******************************************************** //
// Additional Notions

// Imlicitly Lost ************
function foo5() {
  console.log(this.e);
}

let obj5 = {
  e: 5,
  foo5
};

let bar5 = obj5.foo5; // function reference/alias
let e = "Oops, TypeError";
bar5(); // TypeError (leads to 'default binding')

// *** Imlicitly Lost in Callback Function
function foo6() {
  console.log(this.f);
}

function doFoo6(fn) {
  // smth
  fn(); // <-- call-site!
}

let obj6 = {
  f: 2,
  foo6
};

let f = "Oops, TypeError";
doFoo6(obj6.foo6); // TypeError
// ***************************

// Hard Binding **************
function foo7() {
  console.log(this.g);
}

let obj7 = {
  g: 7
};

let bar7 = function() {
  foo7.call(obj7);
};

bar7(); // 7, doesn`t lose value
setTimeout(bar7, 1000); // 7, also in 'cb'

// *** Hard Binding with 'bind'
function foo8() {
  console.log(this.h);
  return this.h;
}

let obj8 = {
  h: 8
};

let bar8 = foo8.bind(obj8);
let baz8 = bar8(); // 8
console.log(baz8); // 8
// ***************************

// 'this' in Arrow function *
function foo9() {
  return i => {
    console.log(this.i);
  };
}

let obj9 = {
  i: 2
};

let obj10 = {
  i: 3
};

bar9 = foo9.call(obj9);
bar9.call(obj10); // 2, not 3!
// ***************************
// ******************************************************** //

// Summary
// 1. Is the function called with 'new'? 'this' is the newly constructed object.
// 2. Is the function called with call or apply (or bind)? 'this' is the
// explicitly specified object.
// 3. Is the function called with a context? 'this' is that context object.
// 4. Otherwise, default (If in strict mode, pick TypeError, otherwise
// pick underfined).
