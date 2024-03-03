function solution(grid) {
    let count = 1;
    const area = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                area.push([i, j]);
            }
        }
    }

    for (let i = 1; i < area.length; i++) {
        if (
            area[i].includes(area[i - 1][0]) ||
            area[i].includes(area[i - 1][1])
        ) {
            continue;
        } else {
            count++;
        }
    }

    return count;
}

console.log(
    solution([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
        ['0', '0', '0', '1', '1'],
    ])
);
