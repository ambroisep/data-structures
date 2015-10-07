var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.newestIndex = 1;
  queue.oldestIndex = 1;
  queue.content = {};
  return queue;
};

var queueMethods = {
  size: function() { return this.newestIndex - this.oldestIndex; },
  enqueue: function(value) {
    this.content[this.newestIndex] = value;
    this.newestIndex++;
  },
  dequeue: function() {
    var result;
    if (this.size() > 0) {
      result = this.content[this.oldestIndex];
      delete this.content[this.oldestIndex];
      this.oldestIndex++;
    }
    return result;
  }
};


