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

    keys() {
        return Object.keys(this.items);
    }
    values() {
        return Object.values(this.items);
    }
    has(key) {
        return this.items.hasOwnProperty(key);
    }

    set(key, value) {
        this.items[key] = value;
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    each(fn) {
        for (let k in this.items) {
            fn(k, this.items[k]);
        }
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
}

function printDictionary(key, value) {
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
}

let dict = new Dictionary();
dict.set('age', 19);
dict.set('name', 'alice');
dict.set('height', 172);
console.log(dict);

dict.remove('age');
console.log(dict);

console.log(dict.has('age'));
console.log(dict.has('name'));
console.log(dict.get('age'));
console.log(dict.get('name'));

console.log(dict.keys());
console.log(dict.values());
dict.each(printDictionary);
