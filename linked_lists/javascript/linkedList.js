function List() {
  this.head    = null;
  this._length = 0;
}

List.prototype.push = function(data) {
  this.head = new ListNode(data);
  this._length = 1;
}