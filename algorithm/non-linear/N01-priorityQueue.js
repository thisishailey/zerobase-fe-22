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
}

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
