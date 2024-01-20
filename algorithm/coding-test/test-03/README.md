# Coding Test 03

<br>

## Problem 1

<img src='./img/1.png' alt='problem-1-img' width='500' />

### Solution

``` javascript
function solution(n) {
    let answer = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            i * i === n ? answer++ : answer += 2;
        }
    }
    return answer;
}
```

[Link to my JavaScript solution file](./T03P1.js)

<br>

## Problem 2

<img src='./img/2.png' alt='problem-2-img' width='500' />

### Solution

``` javascript
function anotherSolution(s) {
    return new Set(s).size;
}
```

[Link to my JavaScript solution file](./T03P2.js)

<br>

## Problem 3

<img src='./img/3.png' alt='problem-3-img' width='500' />

### Solution

``` javascript
function solution(arr) {
    let answer = arr.filter(n => n % 2 === 0);
    return answer.length;
}
```

[Link to my JavaScript solution file](./T03P3.js)

<br>

## Problem 4

<img src='./img/4.png' alt='problem-4-img' width='500' />

### Solution

``` javascript
function solution(s) {
    return parseInt(s, 16).toString(2);
}
```

[Link to my JavaScript solution file](./T03P4.js)

<br>

## Problem 5

<img src='./img/5.png' alt='problem-5-img' width='500' />

### Solution

``` javascript
function solution(arr) {
    let answer = 0;
    arr.forEach(s => { answer |= parseInt(s, 2); });
    return answer;
}
```

[Link to my JavaScript solution file](./T03P5.js)

<br>
