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

    get(key) {
        let index = this.hashCode(key);

        if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
            let current = this.table[index].head;
            do {
                if (current.data.key === key) {
                    return current.data.value;
                }
                current = current.next;
            } while (current);
        }

        return undefined;
    }

    remove(key) {
        let index = this.hashCode(key);
        let element = undefined;

        if (this.table[index] !== undefined) {
            let current = this.table[index].head;
            do {
                if (current.data.key === key) {
                    element = current.data;
                    this.table[index].remove(current.data);
                    this.length--;
                    if (this.table[index].isEmpty()) {
                        delete this.table[index];
                    }
                }
                current = current.next;
            } while (current);
        }

        return element;
    }
}

let cht = new ChainingHashTable();

cht.put('Ana', 172);
cht.put('Donnie', 183);
cht.put('Sue', 163);
cht.put('Jamie', 168);
cht.put('Paul', 190);
cht.print();
console.log('');

console.log(cht.get('Ana'));
console.log(cht.get('Donnie'));
console.log(cht.get('Kim'));
console.log('');

console.log(cht.remove('Sue'));
cht.print();
console.log('');

console.log(cht.remove('Jamie'));
cht.print();
console.log('');

console.log(cht.remove('Jamie'));
console.log(cht);
