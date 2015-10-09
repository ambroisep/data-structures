var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  var result = false;
  var nodeContains = function(tree) {
    if (!result) {
      if (tree.value === target) {
        result = true;
      } else {
        for (var i = 0; i < tree.children.length; i++) {
          nodeContains(tree.children[i]);
        }
      }
    }
  }
  nodeContains(this);
  return result;
};

treeMethods.removeFromParent = function() {
  var parentToRemove = this.parent;
  if (parentToRemove !== undefined) {
    var that = this;
    parentToRemove.children = _.reject(parentToRemove.children, function(child) {
      return child === that;
    });
    this.parent = undefined;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
