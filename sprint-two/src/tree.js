var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
