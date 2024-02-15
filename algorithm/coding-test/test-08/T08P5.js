function solution(S) {
    const stack = [];
    let result = [];

    S.split('').forEach((e) => {
        e = e.trim();

        if (Number(e)) {
            result.push(e);
        } else if (e === '(') {
            stack.push(e);
        } else if (e === ')') {
            while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
                result.push(stack.pop());
            }
            stack.pop();
        } else {
            while (
                stack.length !== 0 &&
                stack[stack.length - 1] !== '(' &&
                getPrecedence(e) <= getPrecedence(stack[stack.length - 1])
            ) {
                result.push(stack.pop());
            }
            stack.push(e);
        }
    });

    while (stack.length !== 0) {
        result.push(stack.pop());
    }

    result = result
        .join('')
        .split('')
        .map((e) => e.trim());

    return result.join(' ');
}

function getPrecedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    } else {
        return 0;
    }
}

console.log(solution('1+2*4'));
console.log(solution('1+3*5+(2+6)/7'));
