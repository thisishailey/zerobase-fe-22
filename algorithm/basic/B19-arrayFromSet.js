/* 5. 중복 단어 제거 */

/* my solution */
function answer(arr) {
  return Array.from(new Set(arr));
}

/* test case */
let input = [
  // TC-1 output=[ 'john', 'alice' ]
  ["john", "alice", "alice"],
  // TC-2 output=[ 'Hello', 'hello', 'HELLO' ]
  ["Hello", "hello", "HELLO", "hello"],
  // TC-3 output=[ 'kiwi', 'banana', 'mango' ]
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}