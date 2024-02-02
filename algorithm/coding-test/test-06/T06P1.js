function solution(n, s, t) {
    let str = '', result = '';

    for (let i = 0; i < n; i++) {
        str += '.';
    }
    str += s;
    str += str;

    const idx = t % (str.length / 2);
    for (let i = idx; i < idx + n; i++) {
        result += str[i];
    }

    return result;
}

console.log(solution(5, 'Snowball', 18));