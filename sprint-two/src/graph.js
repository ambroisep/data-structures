

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes.indexOf(node)) >= 0;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  if (index >= 0) {
    this.nodes.splice(index, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var i = 0;
  while (!result && i < this.edges.length) {
    if (this.compareEdges([fromNode, toNode], this.edges[i])) {
      result = true;
    }
    i++;
  }
  return result;
};


// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    var removed = false;
    var i = 0;
    while (!removed) {
      if (this.compareEdges([fromNode, toNode], this.edges[i])) {
        this.edges.splice(i, 1);
        removed = true;
      }
      i++;
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

Graph.prototype.compareEdges = function(edge1, edge2) {
  return edge1.indexOf(edge2[0]) >= 0 && edge1.indexOf(edge2[1]) >= 0
      && edge2.indexOf(edge1[0]) >= 0 && edge2.indexOf(edge1[1]) >= 0;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


