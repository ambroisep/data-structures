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
    var elementContains = function(element) {
      if (element !== null) {
        if (element.value === target) {
          answer = true;
        } else {
          elementContains(element.next);
        }
      }
    }
    elementContains(list.head)
    return answer;
  };

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
