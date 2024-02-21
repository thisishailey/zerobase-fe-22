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
    size() {
        return this.array.length;
    }
    front() {
        return this.isEmpty() ? undefined : this.array[0];
    }

    enqueue(element) {
        this.array.push(element);
    }
    dequeue() {
        return this.array.shift();
    }

    clear() {
        this.array = [];
    }
}

export default Queue;
