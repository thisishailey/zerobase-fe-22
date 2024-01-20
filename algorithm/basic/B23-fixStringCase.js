/* 9. 문자 교정 */

/* my solution */
function answer(str) {
  // solution #1
  const strArr = [];
  str.split(' ').forEach(e => {
    const wordArr = e.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    strArr.push(wordArr.join(''));
  });
  return strArr.join(' ');
  // solution #2
  let newStr = '';
  for (const word of str.split(' ')) {
    newStr += word[0].toUpperCase() + word.slice(1) + ' ';
  }
  return newStr;
}

/* test case */
let input = [
  // TC-1 output='Hello, My Name Is John'
  "Hello, My name is john",
  // TC-1 output='This Week Is Closed Due To COVID-19'
  "This week is closed due to COVID-19",
  // TC-1 output='Fifty Percent Off This Week'
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}