// The observer pattern offers a subscription model in which objects subscribe to
// an event and get notified when event occurs.

// Observer List
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

// Subject
function Subject() {
  this.observers = new ObserverList();
}

// attach (or subscribe)
Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

// detach (or unsubscribe)
Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

// broadcast (or fire)
Subject.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

// Observer
function Observer() {
  this.update = function(ctx) {
    console.log('Updated!', ctx);
  };
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);

subject.removeObserver(observer1);

subject.notify('ctx');
// Updated! ctx
// Updated! ctx
// Updated! ctx
