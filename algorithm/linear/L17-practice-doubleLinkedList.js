class Node {
    constructor(value) {
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const dll = new DoubleLinkedList();
console.log(dll);
console.log(dll.head);
console.log(dll.size());
console.log(dll.isEmpty());

const node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);
console.log(dll.isEmpty());

const node2 = new Node(456);
node.next = node2;
node2.prev = node;
dll.tail = node2;
dll.length++;
console.log(dll);
