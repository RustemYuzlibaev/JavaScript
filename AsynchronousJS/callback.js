'use strict';

const people = [
  {
    name: 'Name1'
  },
  {
    name: 'Name2'
  },
  {
    name: 'Name3'
  },
  {
    name: 'Name4'
  },
  {
    name: 'Name5'
  }
];

let processPeople = function(data, callback) {
  let fakeDelayFromTheServer = 3000;
  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      callback(data[i]);
    }, fakeDelayFromTheServer);
  }
};

processPeople(people, function(obj) {
  console.log(obj.name);
});

console.log('Message'); // Message Name1 Name2 Name3...
