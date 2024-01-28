/* 접시 꺼내기 */

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
    return this.array[this.array.length - 1];
  }
}

function answer(str) {
  const order = str.split('').sort(), stack = new Stack(), result = [];
  let idx = 0;

  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(order[idx++]);
      result.push(0);
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 0, 0, 1, 1, 0, 1, 0, 1 ]
  "bacd",

  // TC-2 output=[]
  "dabc",

  // TC-3 output=[ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1 ]
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}