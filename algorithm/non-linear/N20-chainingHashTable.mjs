import { LinkedList } from './N20A-linkedList.mjs';

const HASH_SIZE = 37;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class ChainingHashTable {
    constructor() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    getBuffer() {
        let array = [];

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head;
                do {
                    array.push(current.data);
                    current = current.next;
                } while (current);
            }
        }

        return array;
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head;
                process.stdout.write(`#${i}`);

                do {
                    process.stdout.write(
                        ` -> ${current.data.key}: ${current.data.value}`
                    );
                    current = current.next;
                } while (current);

                console.log('');
            }
        }
    }

    size() {
        return this.length;
    }

    clear() {
        this.table = new Array(HASH_SIZE);
        this.length = 0;
    }

    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    put(key, value) {
        let index = this.hashCode(key);

        if (this.table[index] === undefined) {
            this.table[index] = new LinkedList();
        }

        this.table[index].append(new Element(key, value));
        this.length++;

        return true;
    }
}

let cht = new ChainingHashTable();

cht.put('Ana', 172);
cht.put('Donnie', 183);
cht.put('Sue', 163);
cht.put('Jamie', 168);
cht.put('Paul', 190);
console.log(cht);

cht.print();
console.log(cht.getBuffer());
