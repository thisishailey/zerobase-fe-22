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