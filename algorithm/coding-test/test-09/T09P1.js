function solution(s) {
    const arr = s.split('');
    let answer = 0,
        add = true,
        number = '';

    const calculate = () => {
        const n = parseInt(number);
        if (!isNaN(n)) {
            answer = add ? answer + n : answer - n;
            number = '';
        }
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            calculate();
            add = true;
        } else if (arr[i] === '-') {
            calculate();
            add = false;
        } else {
            number += arr[i];
            if (i === arr.length - 1) {
                calculate();
            }
        }
    }

    return answer;
}

console.log(solution('-3+26-7'));
