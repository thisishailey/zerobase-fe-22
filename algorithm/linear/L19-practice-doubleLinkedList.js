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

    insert(value, position = 0) {
        if (position < 0 || position > this.length) return false;

        const newNode = new Node(value);
        let node = this.head, i = 0;

        if (position === 0) {
            if (node === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = node;
                node.prev = newNode;
                this.head = newNode;
            }
        } else if (position === this.length) {
            node = this.tail;
            node.next = newNode;
            newNode.prev = node;
            this.tail = newNode;
        } else {
            while (i++ < position) {
                node = node.next;
            }
            node.prev.next = newNode;
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev = newNode;
        }

        this.length++;
        return true;
    }
}

const dll = new DoubleLinkedList();

dll.append(789);
dll.insert(123);
dll.insert(456, 1);

dll.printNode();
dll.printNodeReverse();