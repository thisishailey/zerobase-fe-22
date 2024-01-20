/* 8. 배열 회전 */

/* my solution */
function answer(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 4, 3, 2, 1 ]
  [1, 2, 3, 4],
  // TC-2 output=[ -15, 'hello', 6, -1 ]
  [-1, 6, "hello", -15],
  // TC-3 output=[ 'mango', 'banana', 'apple' ]
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}