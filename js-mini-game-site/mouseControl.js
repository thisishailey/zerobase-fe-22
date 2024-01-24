import setMouseControlGame from "./module/mouseControlGame.js";

const row = 5;
const col = 5;
const start = [1, 1];
const end = [5, 5];
const walls = [[2, 1], [2, 2], [2, 3], [2, 4], [4, 2], [4, 3], [4, 4], [4, 5]];

setMouseControlGame(row, col, start, end, walls);