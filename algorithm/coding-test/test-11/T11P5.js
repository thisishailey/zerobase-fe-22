function solution(A) {
    let answer = 0;
    const graph = {};

    for (let i = 0; i < A.length; i++) {
        const personA = A[i][0];
        const personB = A[i][1];

        if (graph[personB] && graph[personB].includes(personA)) {
            answer++;
        } else {
            if (graph[personA]) {
                graph[personA] = graph[personA].concat(personB);
            } else {
                graph[personA] = [personB];
            }
        }
    }

    return answer;
}

console.log(
    solution([
        ['apple', 'banana'],
        ['strawberry', 'melon'],
        ['melon', 'banana'],
        ['apple', 'melon'],
        ['banana', 'melon'],
    ])
);
