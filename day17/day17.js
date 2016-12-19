const crypto = require('crypto');
let data = 'vwbaicqe';

const makeBoard = (n) => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = false;
    }
  }
  board.togglePiece = (i, j) => {
    board[i][j] = !board[i][j];
  }
  board.hasBeenVisited = (dir) => {
    let h = crypto.createHash('md5').update(data).digest("hex");
    if (dir === 'U') {
      if (h[0].match(/[bcdef]/)) {
        return false;
      }
    } else if (dir === 'R') {
      if (h[3].match(/[bcdef]/)) {
        return false;
      }
    } else if (dir === 'L') {
      if (h[2].match(/[bcdef]/)) {
        return false;
      }
    } else {
      if (h[1].match(/[bcdef]/)) {
        return false;
      }
    }
    return true;
  }
  board.inRange = (i, j) => {
    return i >= 0 && i < n && j >= 0 && j < n;
  }
  return board;
}

const n = 4;
const board = makeBoard(n);
const visitedMap = {};
let desiredPath = 'shortest';
// Part 1

const robotPaths = (board, start, end, i, j, steps) => {
  i = i === undefined ? start.x : i;
  j = j === undefined ? start.y : j;
  steps = steps === undefined ? 0 : steps;

  if (i === end.x && j === end.y) {
    if (desiredPath === 'shortest' && steps === 10) {console.log(data) };
    return steps;
  }
  board.togglePiece(i, j);
  const allSteps = [];
  if (board.inRange(i + 1, j) && !board.hasBeenVisited('R')) {
    data += 'R';
    allSteps.push(robotPaths(board, start, end, i + 1, j, steps + 1));
    data = data.slice(0, -1);
  }
  if (board.inRange(i - 1, j) && !board.hasBeenVisited('L')) {
    data += 'L';
    allSteps.push(robotPaths(board, start, end, i - 1, j, steps + 1));
    data = data.slice(0, -1);
  }
  if (board.inRange(i, j + 1) && !board.hasBeenVisited('D')) {
    data += 'D';
    allSteps.push(robotPaths(board, start, end, i, j + 1, steps + 1));
    data = data.slice(0, -1);
  }
  if (board.inRange(i, j - 1) && !board.hasBeenVisited('U')) {
    data += 'U';
    allSteps.push(robotPaths(board, start, end, i, j - 1, steps + 1));
    data = data.slice(0, -1);
  }
  board.togglePiece(i, j);
  if (desiredPath === 'shortest') {
    return allSteps.length === 0 ? Infinity : Math.min(...allSteps);
  }
  return allSteps.length === 0 ? -Infinity : Math.max(...allSteps);
}

console.log(robotPaths(board, { x: 0, y: 0 }, { x: 3, y: 3 }));

desiredPath = 'longest';
console.log(robotPaths(board, { x: 0, y: 0 }, { x: 3, y: 3 }));
