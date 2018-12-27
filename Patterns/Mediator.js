// Mediator allows us to expose a unified interface through which the different
// parts of a system may communicate

// Chat
var Participant = function(name) {
  this.name = name;
  this.chatroom = null;
};

Participant.prototype = {
  send: function(msg, to) {
    this.chatroom.send(msg, this, to);
  },
  receive: function(msg, from) {
    console.log(from.name + ' to ' + this.name + ': ' + msg);
  }
};

var Chatroom = function() {
  var participants = [];

  return {
    register: function(participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    send: function(msg, from, to) {
      if (to) {
        // single message
        to.receive(msg, from);
      } else {
        // broadcast message
        for (var key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(msg, from);
          }
        }
      }
    }
  };
};

var user1 = new Participant('User1');
var user2 = new Participant('User2');
var user3 = new Participant('User3');
var user4 = new Participant('User4');

var chatroom = new Chatroom();
chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);
chatroom.register(user4);

user1.send('hey');
user2.send('hi', user3);
user3.send('Hello!');

// User1 to User2: hey
// User1 to User3: hey
// User1 to User4: hey
// User2 to User3: hi
// User3 to User1: Hello!
// User3 to User2: Hello!
// User3 to User4: Hello!

// mediator
var mediator = (function() {
  // Storage for our topics/events
  var channels = {};

  // Subscribe to an event, supply a callback to be executed
  // when that event is broadcast
  var subscribe = function(channel, fn) {
    if (!channels[channel]) {
      channels[channel] = [];
    }
    channels[channel].push({ context: this, callback: fn });
    return this;
  };

  // Publish/broadcast an event to the rest of the application
  var publish = function(channel) {
    if (!channels[channel]) {
      return false;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, l = channels[channel].length; i < l; i++) {
      var subscription = channels[channel][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };

  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function(obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  };
})();

// Pub/sub on a centralized mediator
(function(m) {
  // Set a default value for 'person'
  var name = 'Optimus Prime';

  // Subscribe to a topic/event called 'nameChange' with
  // callback function which will log the original person's name
  // and the incoming name

  m.subscribe('onNameChange', function(arg) {
    console.log('Before:', name);
    name = arg;
    console.log('After:', name);
  });

  // Publish the 'nameChange' topic/event with the new data
  m.publish('onNameChange', 'Bumblebee');
  m.publish('onNameChange', 'Jazz');
  // Before: Optimus Prime
  // After:  Bumblebee
  // Before: Bumblebee
  // After:  Jazz
})(mediator);

// Pub/sub via third party mediator
(function(m) {
  var obj = { data: 'DATA_1' };
  m.installTo(obj);

  obj.subscribe('onData', function(data) {
    console.log('Past data:', this.data);
    this.data = data;
    console.log('Current data:', this.data);
  });

  obj.publish('onData', 'DATA_2');
  // Past data: DATA_1
  // Current data: DATA_2
})(mediator);
