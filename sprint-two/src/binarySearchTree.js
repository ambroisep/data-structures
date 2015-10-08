var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

BinarySearchTree.prototype.insert = function(valueToAdd) {
  var that = this;
  var addToTree = function(side) {
    if (that[side] === null) {
      that[side] = BinarySearchTree(valueToAdd);
    } else {
      that[side].insert(valueToAdd);
    }
  }

  if(valueToAdd < this.value) {
    addToTree('left');
  } else {
    addToTree('right');
  }
};

BinarySearchTree.prototype.contains = function(value) {
  //
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
