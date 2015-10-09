var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  _.extend(list, DoublyLinkedList.methods);
  return list;
};

DoublyLinkedList.methods = {
  addToHead: function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  },
  removeTail: function() {
    var newTail = this.tail.previous;
    newTail.next = null;
    this.tail = newTail;
    newTail = null;
  }
};