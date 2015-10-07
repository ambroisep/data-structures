var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var length = 0;
  var startIndex = 0;

  someInstance.enqueue = function(value) {
    storage[startIndex+length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var element;
    if (length > 0) {
      element = storage[startIndex];
      delete storage[startIndex];
      startIndex++;
      length--;
    }
    return element;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
