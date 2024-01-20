# Coding Test 04

<br>

## Problem 1

<img src='./img/1.png' alt='problem-1-img' width='500' />

### Solution

``` javascript
function solution(n) {
    return sum(n);
}

function sum(n) {
    if (n === 1) return 1;
    return n + sum(n - 1);
}
```

[Link to my JavaScript solution file](./T04P1.js)

<br>

## Problem 2

<img src='./img/2.png' alt='problem-2-img' width='500' />

### Solution

``` javascript
function solution(num) {
    if (num < 4) {
        return num > 1;
    }
    return (num - 1) % 3 === 0;
}
```

[Link to my JavaScript solution file](./T04P2.js)

<br>

## Problem 3

<img src='./img/3.png' alt='problem-3-img' width='500' />

### Solution

``` javascript
function solution(A) {
    let maxProfit = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            const profit = A[j] - A[i];
            if (profit > maxProfit) maxProfit = profit;
        }
    }
    return maxProfit;
}
```

[Link to my JavaScript solution file](./T04P3.js)

<br>

## Problem 4

<img src='./img/4.png' alt='problem-4-img' width='500' />

### Solution

``` javascript
function solution(n) {
    const b = n.toString(2).split('');
    let maxDist = 1;
    b.forEach((e, i) => {
        if (e === '1') {
            for (let idx = 1; idx < b.length - i; idx++) {
                if (b[i + idx] === '1') {
                    const dist = idx;
                    if (dist > maxDist) maxDist = dist;
                    break;
                }
            }
        }
    });
    return maxDist;
}
```

[Link to my JavaScript solution file](./T04P4.js)

<br>

## Problem 5

<img src='./img/5.png' alt='problem-5-img' width='500' />

### Solution

``` javascript
function solution(nums, d) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        if (nums.lastIndexOf(firstNum) !== i) {
            if (nums[i] % d === 0) answer++;
        }
    }
    return answer;
}
```

[Link to my JavaScript solution file](./T04P5.js)

<br>
