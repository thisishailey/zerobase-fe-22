class Dictionary {
    constructor(items = {}) {
        this.items = items;
    }

    getBuffer() {
        return { ...this.items };
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
}

let dict = new Dictionary({ age: 19, name: 'alice' });
console.log(dict);

console.log(dict.getBuffer());
console.log(dict.size());
dict.clear();
console.log(dict);
