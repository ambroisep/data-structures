

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k ,v]]);
  } else {
    var bucket = this._storage.get(index).slice();
    var isInBucket = false;
    var i = 0;
    while (!isInBucket && i < bucket.length) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        isInBucket = true;
      }
      i++;
    }
    if (!isInBucket) {
      bucket.push([k, v]);
    }
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  if (this._storage.get(index) !== undefined) {
    var bucket = this._storage.get(index);
    var i = 0;
    while (result === undefined && i < bucket.length) {
      if(bucket[i][0] === k) {
        result = bucket[i][1];
      }
      i++;
    }
  }
  return (result || null);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    var bucket = this._storage.get(index).splice();
    var removed = false;
    var i = 0;
    while (!removed && i < bucket.length) {
      if(bucket[i][0] === k) {
        bucket = bucket.splice(i, 1);
        removed = true;
      }
      i++;
    }
    if (bucket.length === 0) {
      bucket = undefined;
    }
    this._storage.set(index, bucket);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
