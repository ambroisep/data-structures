var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._length = 0;
  this._content = {};
};

Stack.prototype.size = function() { return this._length; };
Stack.prototype.push = function(value) {
  this._length++;
  this._content[this._length] = value;
};
Stack.prototype.pop = function() {
  var result;
  if (this._length > 0) {
    result = this._content[this._length];
    delete this._content[this._length];
    this._length--;
  } 
  return result;
};

