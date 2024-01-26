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

  printNode() {
    for (let node = this.head; node !== null; node = node.next) {
      process.stdout.write(node.data + ' -> ');
    }
    console.log('null');
  }

  append(value) {
    const newNode = new Node(value);
    let node = this.head;

    if (node === null) {
      this.head = newNode;
    } else {
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }

    this.length++;
  }
}

const ll = new LinkedList();

console.log(ll);
ll.printNode();

ll.append(123);
ll.append(456);
ll.append(789);
ll.append('abc');

console.log(ll);
ll.printNode();