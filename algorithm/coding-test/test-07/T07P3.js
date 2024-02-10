function solution(s) {
    const arr = [];

    for (const c of s) {
        if (arr.includes(c)) {
            return c;
        } else {
            arr.push(c);
        }
    }

    return '';
}

console.log(solution('google'));
