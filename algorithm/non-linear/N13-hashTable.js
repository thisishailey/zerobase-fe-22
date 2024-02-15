const HASH_SIZE = 37;

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

    hashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }
}

let ht = new HashTable();
console.log(ht);

console.log(ht.hashCode('Ana'));
console.log(ht.hashCode('Sue'));
console.log(ht.hashCode('Paul'));
