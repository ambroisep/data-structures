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

BinarySearchTree.prototype.contains = function(valueToSearch) {
  var result = false;
  var checkNode = function(node) {
    if (node !== null) {
      if (node.value === valueToSearch) {
        result = true;
      } else {
        if (valueToSearch < node.value) {
          checkNode(node.left);
        } else {
          checkNode(node.right);
        }
      }
    }
  }
  checkNode(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var callbackOnNode = function (node) {
    if (node !== null) {
      cb(node.value);
      callbackOnNode(node.left);
      callbackOnNode(node.right);
    }
  };
  callbackOnNode(this);
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var applyCallBackToLevel = function(nodes) {
    var values = _.map(nodes, function(i) { return i.value; });
    var children = [];
    _.each(nodes, function(i) {
      if (i.left) {
        children.push(i.left);
      }
      if (i.right) {
        children.push(i.right);
      }
    });
    _.each(values, cb);
    if (children.length > 0) {
      applyCallBackToLevel(children);
    }
  };

  applyCallBackToLevel([this]);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
