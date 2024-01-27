class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class CircularLinkedList {
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

const cll = new CircularLinkedList();
console.log(cll.size());
console.log(cll.isEmpty());

const node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);

const node2 = new Node(456);
cll.head.next = node2;
node2.next = cll.head;
cll.length++;
console.log(cll);