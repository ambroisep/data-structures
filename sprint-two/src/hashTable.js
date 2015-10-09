

var HashTable = function() {
  this._limit = 2;
  this._storage = LimitedArray(this._limit);
  this._tuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var that = this;
  var addToStorage =  function(ind, valueToAdd) {
    if (that._storage.get(ind) === undefined) {
      that._storage.set(ind, [valueToAdd]);
      that._tuples++;
    } else {
      var bucket = that._storage.get(ind).slice();
      var isInBucket = false;
      var i = 0;
      while (!isInBucket && i < bucket.length) {
        if (bucket[i][0] === valueToAdd[0]) {
          bucket[i][1] = valueToAdd[1];
          isInBucket = true;
        }
        i++;
      }
      if (!isInBucket) {
        bucket.push(valueToAdd);
        that._tuples++;
      }
      that._storage.set(ind, bucket);
    }
  };
  addToStorage(index, [k, v]);

 if (that._limit * 0.75 < that._tuples) {
    // double limit
    that._limit *= 2;
    // recreate storage
    var newStorage = LimitedArray(that._limit);
    that._storage.each(function(bucket) {
      _.each(bucket, function(tuple) {
        var index = getIndexBelowMaxForKey(tuple[0], that._limit);
         console.log(tuple[0]);
        addToStorage(index, tuple);
      });
    });
     newStorage.each(function(i) {
       console.log(i);
     });
    that._storage = newStorage;
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
