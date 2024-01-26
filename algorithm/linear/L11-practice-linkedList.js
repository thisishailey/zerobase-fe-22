class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const ll = new LinkedList();
console.log(ll);
console.log(ll.isEmpty());

ll.head = new Node(123);
ll.length++;
console.log(ll);
console.log(ll.isEmpty());

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
console.log(ll.size());

ll.head.next.next = new Node(789);
ll.length++;
console.log(ll);
console.log(ll.head.next);