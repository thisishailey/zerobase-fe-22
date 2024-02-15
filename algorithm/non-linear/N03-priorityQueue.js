class Element {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.array = [];
    }

    getBuffer() {
        return this.array.map((element) => element.data);
    }
    isEmpty() {
        return this.array.length === 0;
    }
    size() {
        return this.array.length;
    }

    enqueue(data, priority) {
        let element = new Element(data, priority);
        let added = false;

        for (let i = 0; i < this.array.length; i++) {
            if (element.priority < this.array[i].priority) {
                this.array.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.array.push(element);
        }

        return this.array.length;
    }

    dequeue() {
        return this.array.shift();
    }

    front() {
        return this.array.length === 0 ? undefined : this.array[0].data;
    }

    clear() {
        this.array = [];
    }
}

let pq = new PriorityQueue();

pq.enqueue('Alice', 1);
pq.enqueue('Bob', 2);
pq.enqueue('Tom', 1);
pq.enqueue('John', 3);

console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());

console.log(pq.front());
console.log(pq.size());
