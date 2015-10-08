var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

BinarySearchTree.prototype.insert = function(valueToAdd) {
  if(valueToAdd < this.value) {
    if(this.left === null) {
      this.left = BinarySearchTree(valueToAdd);
    } else {
      this.left.insert(valueToAdd);      
    }
  } else {
    if(this.right === null) {
      this.right = BinarySearchTree(valueToAdd);
    } else {
      console.log(this.right);
      this.right.insert(valueToAdd);      
    }
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
