class CircularQueue {
    constructor(array = [], size = 5) {
        this.array = array;
        this.size = array.length > size ? array.length : size;
        this.length = array.length;
        this.head = 0;
        this.tail = array.length;
    }

    getBuffer() {
        return this.array.slice();
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.size;
    }

    enqueue(element) {
        if (this.isFull()) return false;

        this.array[this.tail] = element;
        this.tail = (this.tail + 1) % this.size;
        this.length++;

        return true;
    }
    dequeue() {
        if (this.isEmpty()) return undefined;

        let element = this.array[this.head];
        delete this.array[this.head];
        this.head = (this.head + 1) % this.size;
        this.length--;

        return element;
    }
}

let cq = new CircularQueue([1, 2, 3, 4]);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq);

console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
