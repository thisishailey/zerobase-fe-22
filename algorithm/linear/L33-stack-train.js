/* 기차 운행 */

/* my solution */

class Stack {
  constructor(array) {
    this.array = array ? array : [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  push(element) {
    return this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.size() - 1];
  }
}

function answer(train) {
  const stack = new Stack();
  let n = 0;

  for (let i = 0; i < train.length; i++) {
    while (stack.isEmpty() || stack.peek() < train[i]) {
      stack.push(++n);
    }

    if (stack.peek() === train[i]) {
      stack.pop();
    } else return false;
  }

  return true;
}

/* test case */
let input = [
  // TC-1 output='true'
  [1, 2, 3],

  // TC-2 output='true'
  [3, 2, 1],

  // TC-3 output='false'
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}