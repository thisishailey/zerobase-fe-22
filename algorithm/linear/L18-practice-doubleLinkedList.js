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

    printNode() {
        process.stdout.write('head -> ');
        for (let node = this.head; node !== null; node = node.next) {
            process.stdout.write(node.data + ' -> ');
        }
        console.log('null');
    }

    printNodeReverse() {
        process.stdout.write('null <- ');
        const data = [];
        for (let node = this.tail; node !== null; node = node.prev) {
            data.push(node.data + ' <- ');
        }
        while (data.length !== 0) {
            process.stdout.write(data.pop());
        }
        console.log('tail');
    }

    append(value) {
        const newNode = new Node(value);
        const node = this.tail;

        if (node === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            node.next = newNode;
            newNode.prev = node;
            this.tail = newNode;
        }

        this.length++;
    }
}

const dll = new DoubleLinkedList();

dll.append(123);
dll.append(456);
dll.append(789);

dll.printNode();
dll.printNodeReverse();