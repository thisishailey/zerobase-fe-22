/* my solution */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  const cll = new LinkedList(), result = [];
  let node = cll.head, prev, count;

  for (let i = 1; i <= n; i++) {
    const newNode = new Node(i);

    if (node === null) {
      cll.head = newNode;
    } else {
      node.next = newNode;
    }

    node = newNode;

    if (i === n) {
      node.next = cll.head;
    } else if (i === m - 1) {
      prev = node;
    }
  }

  while (result.length < n) {
    node = prev.next;
    prev.next = node.next;
    result.push(node.data);
    node = prev.next;
    
    count = k;
    while (--count) {
      prev = node;
      node = node.next;
    }
  }

  return result;
}


/* test case */
let input = [
  // TC-1 output=[ 2, 5, 8, 4, 1, 7, 3, 6 ]
  [8, 2, 3],

  // TC-2 output=[ 2, 5, 8, 1, 6, 10, 7, 4, 9, 3 ]
  [10, 2, 3],

  // TC-3 output=[ 5, 12, 19, 7, 15, 3, 13, 2, 14, 6, 18, 11, 9, 8, 10, 17, 4, 16, 20, 1 ]
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}