const HASH_SIZE = 1013;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    size() {
        return this.length;
    }

    getBuffer() {
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                array.push(this.table[i]);
            }
        }
        return array;
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(
                    i + ' -> ' + this.table[i].key + ': ' + this.table[i].value
                );
            }
        }
    }

    hashCode(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    put(key, value) {
        let index = this.hashCode(key);
        if (this.table[index] !== undefined) {
            return false;
        } else {
            this.table[index] = new Element(key, value);
            this.length++;
            return true;
        }
    }

    get(key) {
        return this.table[this.hashCode(key)];
    }

    remove(key) {
        let element = this.table[this.hashCode(key)];
        if (element !== undefined) {
            delete this.table[this.hashCode(key)];
            this.length--;
        }
        return element;
    }

    clear() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }
}

let ht = new HashTable();

console.log(ht.put('Ana', 172));
console.log(ht.put('Donnie', 183));
console.log(ht.put('Sue', 163));
console.log(ht.put('Jamie', 168));
console.log(ht.put('Paul', 190));

console.log('');
console.log(ht.size());
ht.print();
