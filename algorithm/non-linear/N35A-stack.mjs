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
    peek() {
        return this.array[this.size() - 1];
    }

    push(element) {
        return this.array.push(element);
    }
    pop() {
        return this.array.pop();
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

export default Stack;
