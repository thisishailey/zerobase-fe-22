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

    insert(value, position = 0) {
        if (position < 0 || position > this.length) return false;

        const newNode = new Node(value);
        let node = this.head, i = 0;

        if (position === 0) {
            if (node === null) {
                node = newNode;
            } else {
                while (node.next !== this.head) {
                    node = node.next;
                }
            }
            newNode.next = this.head;
            this.head = newNode;
            node.next = this.head;
        } else {
            while (++i < position) {
                node = node.next;
            }
            newNode.next = node.next;
            node.next = newNode;
        }

        this.length++;
        return true;
    }
}

const cll = new CircularLinkedList();

cll.insert(123);
cll.append(456);
cll.insert(789, 2);

console.log(cll.head);
cll.printNode();