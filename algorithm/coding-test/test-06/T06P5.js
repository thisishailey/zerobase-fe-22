function solution(A, B) {
    const primeA = primeFactors(A);
    const primeB = primeFactors(B);

    for (let i = 0; i < primeA.length; i++) {
        if (primeA[i] !== primeB[i]) return 0;
    }

    return 1;
}

const primeFactors = (n) => {
    const prime = [];
    let f = 2;

    while (n > 1) {
        if (n % f === 0) {
            if (!prime.includes(f)) prime.push(f);
            n /= f;
        } else f++;
    }

    return prime;
}

console.log(solution(9, 18));
console.log(solution(6, 12));