/* my solution */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  const ll = new LinkedList();

  let node = ll.head;

  for (let i = 0; i < nums.length; i++) {
    const newNode = new Train(nums[i]);

    if (node === null) {
      ll.head = newNode;
    } else {
      node.next = newNode;
    }

    node = newNode;
  }

  return ll;
}


/* test case */
let input = [
  // TC-1 output='4 -> 7 -> 1 -> 10 -> 6 -> null'
  [4, 7, 1, 10, 6],

  // TC-2 output='3 -> 10 -> 6 -> 9 -> 11 -> 3 -> 4 -> null'
  [3, 10, 6, 9, 11, 3, 4],

  // TC-3 output='5 -> 8 -> 7 -> 3 -> 4 -> 1 -> 2 -> 7 -> 10 -> 7 -> null'
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}