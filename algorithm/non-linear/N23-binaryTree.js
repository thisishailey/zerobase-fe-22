class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    _insertNode(node, value) {
        if (node === null) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }

        return node;
    }
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _preOrderTraverseNode(node, callback) {
        if (node === null) {
            return;
        }

        callback(node);
        this._preOrderTraverseNode(node.left, callback);
        this._preOrderTraverseNode(node.right, callback);
    }
    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }
}

let tree = new BinaryTree();

tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}

console.log('********** Pre-Order **********');
tree.preOrderTraverse(printNode);
console.log('end\n');
