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

    size() {
        return this.array.length;
    }

    push(element) {
        return this.array.push(element);
    }

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array[this.size() - 1];
    }
}

const stack = new Stack([1, 2, 3]);
console.log(stack.size());
console.log(stack.push(4));
console.log(stack);
console.log(stack.pop());
console.log(stack.peek());