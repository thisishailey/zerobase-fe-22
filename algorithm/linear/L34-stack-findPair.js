/* 괄호 짝 찾기 */

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
}

function answer(str) {
  str = str.split('');
  const stack = new Stack(), result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (stack.isEmpty()) return [];
      else result.push([stack.pop(), i]);
    }
  }

  if (!stack.isEmpty()) return [];

  return result;
}

/* test case */
let input = [
  // TC-1 output=[ [ 0, 4 ] ]
  "(a+b)",

  // TC-2 output=[ [ 3, 7 ], [ 0, 10 ] ]
  "(a*(b+c)+d)",

  // TC-3 output=[]
  "(a*(b+c)+d+(e)",

  // TC-4 output=[]
  "(a*(b+c)+d)+e)",

  // TC-5 output=[ [ 3, 7 ], [ 0, 10 ], [ 15, 19 ], [ 12, 20 ] ]
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}