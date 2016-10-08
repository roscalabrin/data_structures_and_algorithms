function List() {
  this.head    = null;
  this._length = 0;
}

List.prototype.push = function(data) {
  var node = new ListNode(data);
  var currentNode = this.head;
  
  if (!currentNode) {
    this.head = node;
    this._length ++;
  } else {
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = node;
    this._length ++;
  }
}