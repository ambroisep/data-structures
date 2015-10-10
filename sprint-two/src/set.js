var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var result = false;
  var i = 0;
  while (!result && i < this._storage.length) {
    if (this._storage[i] === item) {
      result = true;
    }
    i++;
  }
  return result;
};

setPrototype.remove = function(item) {
  var removed = false;
  var i = 0;
  while (!removed && i < this._storage.length) {
    if (this._storage[i] === item) {
      removed = true;
      this._storage.splice(i, 1);
    }
    i++;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
