# [Programmers Coding Test Kit - Hash](https://school.programmers.co.kr/learn/courses/30/parts/12077)

## [#1 Ponketmon](https://school.programmers.co.kr/learn/courses/30/lessons/1845) 

### [Solution](./H1-ponketmon.js)

```javascript
function solution(nums) {
    return Math.min(new Set(nums).size, nums.length / 2);
}
```

## [#2 Marathon](https://school.programmers.co.kr/learn/courses/30/lessons/42576) 

### [Solution](./H2-marathon.js)

```javascript
function solution(participant, completion) {
    const hash = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        const p = participant[i];
        const c = completion[i];
        
        hash.set(p, (hash.get(p) || 0) + 1);
        hash.set(c, (hash.get(c) || 0) - 1);
    }
    
    for (const [key, val] of hash) {
        if (val >= 1) return key;
    }
}
```

## [#3 Phone Number](https://school.programmers.co.kr/learn/courses/30/lessons/42577) 

### [Solution](./H3-phoneNumber.js)

```javascript
function solution(phone_book) {
    const arr = phone_book.sort();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]?.indexOf(arr[i]) === 0) return false;
    }
    
    return true;
}
```

## [#4 Clothes](https://school.programmers.co.kr/learn/courses/30/lessons/42578) 

### [Solution](./H4-clothes.js)

```javascript
function solution(clothes) {
    const hash = new Map();
    let result = 1;
    
    clothes.forEach(e => hash.set(e[1], (hash.get(e[1]) || 0) + 1));
    
    hash.forEach(val => result *= val + 1);
    
    return --result;
}
```

## [#5 Album](https://school.programmers.co.kr/learn/courses/30/lessons/42579) 

### [Solution](./H5-album.js)

```javascript
function solution(genres, plays) {
    const genreName = [], genreCnt = [], result = [];
    
    for (let i = 0; i < genres.length; i++) {
        if (genreName.includes(genres[i])) {
            genreCnt[genreName.indexOf(genres[i])] += plays[i];
        } else {
            genreName.push(genres[i]);
            genreCnt.push(plays[i]);
        }
    }
    
    const genre = genreName.map((e, i) => [e, genreCnt[i]]);
    
    if (genre.length > 1) genre.sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < genre.length; i++) {
        const index = genres.map((e, idx) => { if (e === genre[i][0]) return idx });
        const song = plays.map((e, idx) => { if (index.includes(idx)) return [idx, e] });
        if (song.length > 1) {
            song.sort((a, b) => b[1] - a[1]);
            result.push(song[0][0], song[1][0]);
        } else {
            result.push(song[0][0]);
        }
    }
    
    return result;
}
```
