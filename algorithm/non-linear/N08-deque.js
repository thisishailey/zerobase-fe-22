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
}

let dq = new Deque([1, 2, 3]);
console.log(dq);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

console.log(dq.popFront());
console.log(dq.popBack());
console.log(dq);
