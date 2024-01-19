/* 숫자 빈도수 구하기 */

/* my solution */
function answer(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  for (let i = s; i <= e; i++) {
    const str = i.toString().split('');
    for (let j = 0; j < str.length; j++) {
      result[str[j]]++;
    }
  }

  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 1, 10, 2, 9, 1, 1, 1, 1, 0, 1 ]
  [129, 137],

  // TC-2 output=[ 100, 614, 101, 101, 189, 201, 201, 201, 201, 119 ]
  [1412, 1918],

  // TC-3 output=[ 1503, 1527, 1503, 1502, 2343, 2503, 2512, 2512, 2505, 1686 ]
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}