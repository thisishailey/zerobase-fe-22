class Stack {
    constructor(array) {
        this.array = array ? array : [];
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

const stack = new Stack([1, 2, 3]);
console.log(stack);
console.log(stack.getBuffer());
console.log(stack.isEmpty());