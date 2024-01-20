/* 8. 배열 회전 */

/* my solution */
function answer(arr) {
  // solution #1
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
  return result;
  // solution #2
  let tmp;
  for (let i = 0; i < arr.length / 2; i++) {
    tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  return arr;
  // solution #3
  return arr.reverse();
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