/* my solution */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  let node = ll.head, prev = null, next;

  while (node !== null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  ll.head = prev;

  return ll;
}


/* test case */
let input = [
  // TC-1 output='7 -> 3 -> 1 -> null'
  [7, 3, 1],

  // TC-2 output='4 -> 6 -> 9 -> 1 -> 3 -> null'
  [4, 6, 9, 1, 3],

  // TC-3 output='3 -> 4 -> 1 -> 2 -> 7 -> 9 -> 6 -> null'
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
}

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}