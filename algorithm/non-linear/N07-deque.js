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
}

let dq = new Deque([1, 2, 3]);
console.log(dq);

let data = dq.getBuffer();
console.log(data === dq.array);
console.log(data);

console.log(dq.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
