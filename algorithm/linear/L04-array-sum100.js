/* 일곱 난장이 */

/* my solution */
function answer(dwarf) {
  const sum = dwarf.reduce((a, c) => a + c) - 100;
  for (let i = 0; i < dwarf.length; i++) {
    const idx = dwarf.indexOf(sum - dwarf[i]);
    if (idx > 0) {
      return dwarf.filter(e => (e !== dwarf[idx]) && (e !== dwarf[i]));
    }
  }
}

/* test case */
let input = [
  // TC-1 output=[ 1, 5, 6, 7, 19, 29, 33 ]
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC-2 output=[ 23, 11, 2, 18, 3, 6, 37 ]
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC-3 output=[ 3, 37, 5, 6, 19, 2, 28 ]
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}