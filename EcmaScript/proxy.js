// A proxy allows you to determine behaviors whenever a property is accessed in
// a target object

let p = new Proxy(target, handler);

// handler: An object whose properties are functions which define the behavior of
// the proxy when an operation is performed on it

// target: can by any sorts of objects, or another proxy

// set/get
let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    console.log(`Reading ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Writing ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = 'Rustem'; // Writing firstName Rustem
proxy.firstName; // Reading firstName

// apply
function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {
  apply: function(target, thisArg, argumentList) {
    console.log(`Will compute the sum: ${argumentList}`);
    return target.apply(thisArg, argumentList);
  }
});

console.log(proxy(1, 2));
// Will compute the sum: 1,2
// 3

// construct
function User(name, lastname) {
  (this.name = name), (this.lastname = lastname);
}

let UserProxy = new Proxy(User, {
  construct: function(target, argumentList) {
    console.log(`'new' with arguments: ${argumentList}`);
    return new target(...argumentList);
  }
});

let user = new UserProxy('Rustem', 'Yuzlibaev');
// 'new' with arguments: Rustem,Yuzlibaev

// A complete list of possible interceptor functions that a handler can define:
//
// getPrototypeOf - intercepts calls to the getPrototypeOf method.
// setPrototypeOf - intercepts calls to the setPrototypeOf method.
// isExtensible - intercepts the call to the isExtensible method.
// preventExtensions - intercepts the call to the preventExtensions method.
// getOwnPropertyDescriptor - intercepts calls to the getOwnPropertyDescriptor method.
// defineProperty - intercepts the call to the defineProperty method.
// has - intercepts checking for the existence of a property that is used in the in operator and in some other methods of embedded objects.
// get - intercepts the reading of a property.
// set - intercepts a property entry.
// deleteProperty - intercepts property deletion with the delete operator.
// enumerate - triggered when calling for..in or for..of, returns an iterator for the properties of the object.
// ownKeys - intercepts calls to the getOwnPropertyNames method.
// apply - intercepts calls to target ().
// construct - intercepts new target () calls.
