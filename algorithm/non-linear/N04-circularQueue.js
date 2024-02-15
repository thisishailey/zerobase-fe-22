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
}

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);

console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
