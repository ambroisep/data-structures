var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if(list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail;
    }
    
    
  };

  list.removeHead = function() {
    var oldHead = list.head
    var newHead = oldHead.next;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    var answer = false;
    var elementContains = function(node) {
      if (node !== null) {
        if (node.value === target) {
          answer = true;
        } else {
          elementContains(node.next);
        }
      }
    }
    elementContains(list.head)
    return answer;
  };

  list.removeFirstOccurence = function(target) {
    var removeOrContinue = function(node, nodeBefore) {
      if (node !== null) {
        if (node.value === target) {
          nodeBefore.next = node.next;
          // delete node;
        } else {
          removeOrContinue(node.next, node);
        }
      }
    }
    //first check if the node we want to delete is the head
    if (list.head !== null) {
      if (list.head.value === target) {
      list.removeHead();
      } else {
        removeOrContinue(list.head.next, list.head)
      }
    }
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
