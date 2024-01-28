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

    indexOf(element, position = 0) {
        for (let i = position; i < this.size(); i++) {
            if (this.array[i] === element) return i;
        }

        return -1;
    }

    includes(element, position = 0) {
        for (let i = position; i < this.size(); i++) {
            if (this.array[i] === element) return true;
        }

        return false;
    }
}

const stack = new Stack([1, 2, 3, 4, 5]);
console.log(stack.indexOf(4));
console.log(stack.indexOf(2, 3));
console.log(stack.includes(2));
console.log(stack.includes(2, 3));
console.log(stack.includes(6));