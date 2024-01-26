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

  insert(value, position = 0) {
    if (position < 0 || position > this.length) return false;

    const newNode = new Node(value);
    let node = this.head, i = 0, prev;

    if (position === 0) {
      newNode.next = node;
      this.head = newNode;
    } else {
      while (i++ < position) {
        prev = node;
        node = prev.next;
      }
      newNode.next = node;
      prev.next = newNode;
    }

    this.length++;
    return true;
  }
}

const ll = new LinkedList();

ll.append(123);
ll.append(456);
ll.insert(789);
ll.insert('abc', 2);

ll.printNode();
console.log('\nList Size: ' + ll.size());