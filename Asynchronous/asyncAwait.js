// Variants
// Async function declorations: async function foo() {}
// Async function expressions: const foo = async function () {};
// Async method definitions: let obj = { async foo() {} }
// Async arrow functions: const foo = async () => {}

// *** Async function always return Promises ***
async function asyncFunc() {
  return 123;
  // throw new Error('Error!');
}

asyncFunc()
  .then(x => console.log(x)) // 123
  .catch(err => console.log(err));

// *** Handling results via 'await' ***
// The operator await waits for its operand, a Promise, to be settled
async function asyncFunc() {
  const result = await otherAsyncFunc();
  console.log(result);
}

// Equivalet to:
function asyncFunc() {
  return otherAsyncFunc().then(result => console.log(result));
}

// Handling multiple asynchronous results sequentially:
async function asyncFunc() {
  const result1 = await otherAsyncFunc1();
  console.log(result1);
  const result2 = await otherAsyncFunc2();
  console.log(result2);
}

// Equivalent to:
function asyncFunc() {
  return otherAsyncFunc1()
    .then(result1 => {
      console.log(result1);
      return otherAsyncFunc2();
    })
    .then(result2 => {
      console.log(result2);
    });
}

// Handling multiple asynchronous results in parallel:
async function asyncFunc() {
  const [result1, result2] = await Promise.all([
    otherAsyncFunc1(),
    otherAsyncFunc2()
  ]);
  console.log(result1, result2);
}

// Equivalent to:
function asyncFunc() {
  return Promise.all([otherAsyncFunc1(), otherAsyncFunc2()]).then(result => {
    console.log(result[0], result[1]);
  });
}

// Handling errors:
async function asyncFunc() {
  try {
    await otherAsyncFunc();
  } catch (err) {
    console.log(err);
  }
}

// Equivalent to:
function asyncFunc() {
  return otherAsyncFunc().catch(err => {
    console.log(err);
  });
}

// examples
function fetchJson(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.log(`ERROR: ${error.stack}`);
    });
}

// via async/await
async function fetchJson(url) {
  try {
    let res = await fetch(url);
    let data = res.json();
    return data;
    // or
    // return await res.json();
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

fetchJson("http://example.com/some_file.json").then(obj => console.log(obj));
