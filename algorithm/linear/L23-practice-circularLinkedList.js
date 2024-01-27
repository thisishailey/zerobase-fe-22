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

    printNode() {
        if (this.head) process.stdout.write(this.head.data + ' -> ');
        for (let node = this.head.next; node !== this.head; node = node.next) {
            process.stdout.write(node.data + ' -> ');
        }
        console.log('null');
    }

    append(value) {
        const newNode = new Node(value);
        let node = this.head;

        if (node === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            while (node.next !== this.head) {
                node = node.next;
            }
            node.next = newNode;
            newNode.next = this.head;
        }

        this.length++;
    }
}

const cll = new CircularLinkedList();

cll.append(123);
console.log(cll);

cll.append(456);
console.log(cll);

cll.printNode();