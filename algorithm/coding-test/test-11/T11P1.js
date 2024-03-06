function solution(p, s) {
    const pattern = p.split('');
    const string = s.split(' ');
    const dict = {};

    if (pattern.length !== string.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const a = pattern[i];
        const b = string[i];

        if (dict[a] && dict[a] === b && dict[b] && dict[b] === a) {
            continue;
        } else if (dict[a] || dict[b]) {
            return false;
        } else {
            dict[a] = b;
            dict[b] = a;
        }
    }

    return true;
}

console.log(solution('abba', 'apple orange orange apple'));
console.log(solution('abca', 'apple orange orange apple'));
console.log(solution('abba', 'apple orange orange apple banana'));
