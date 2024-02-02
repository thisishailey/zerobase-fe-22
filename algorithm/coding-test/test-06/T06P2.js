function solution(s) {
    const strArr = s.split('.').join(' ').split(',').join(' ').split('!').join(' ').split('?').join(' ').split(' ');
    const reverse = strArr.map(e => e.split('').reverse().join(''));
    const result = reverse.filter(e => e !== '');
    return result;
}

console.log(solution('Hello, World!?'));