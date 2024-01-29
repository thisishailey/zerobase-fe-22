class Queue {
    constructor(array) {
        this.array = array ? array : [];
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty() {
        return this.array.length === 0;
    }

    enqueue(element) {
        this.array.push(element);
    }

    dequeue() {
        return this.array.shift();
    }

    front() {
        return this.isEmpty() ? undefined : this.array[0];
    }

    size() {
        return this.array.length;
    }

    clear() {
        this.array = [];
    }
}

const queue = new Queue();
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.getBuffer());
console.log(queue.front());
console.log(queue.size());
queue.clear();
console.log(queue.getBuffer());