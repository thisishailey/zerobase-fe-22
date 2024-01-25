function solution(s) {
    const str = s.toLowerCase().split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) return false;
    }

    return true;
}

console.log(solution('bbcdefghijklmnopqrstuvwxyz'));