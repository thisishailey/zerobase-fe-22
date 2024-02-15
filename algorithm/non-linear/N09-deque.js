class Deque {
    constructor(array = []) {
        this.array = array;
    }

    getBuffer() {
        return this.array.slice();
    }
    isEmpty() {
        return this.array.length === 0;
    }

    pushFront(element) {
        return this.array.unshift(element);
    }
    popFront() {
        return this.array.shift();
    }

    pushBack(element) {
        return this.array.push(element);
    }
    popBack() {
        return this.array.pop();
    }

    front() {
        return this.array.length === 0 ? undefined : this.array[0];
    }
    back() {
        return this.array.length === 0
            ? undefined
            : this.array[this.array.length - 1];
    }

    size() {
        return this.array.length;
    }
    clear() {
        this.array = [];
    }
}

let dq = new Deque([1, 2, 3]);
console.log(dq);

console.log(dq.front());
console.log(dq.back());
console.log(dq.size());

dq.clear();
console.log(dq);
