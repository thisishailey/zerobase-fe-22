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
}

let tree = new BinaryTree();

tree.insert('F');
/*
this.root = null -> F
*/

tree.insert('B');
/*
this.root = F
  F.left = B
*/

tree.insert('A');
/*
this.root = F
  F.left = B
  B.left = A
*/

tree.insert('D');
/*
this.root = F
  F.left = B
  B.left = A
  B.right = D
*/

tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

console.log(tree);
