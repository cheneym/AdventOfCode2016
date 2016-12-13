const count_set_bits = (n) => {
  let count = 0; 
  while(n != 0){
    n &= (n-1);
    count++;
  }
  return count;
}

const countBits = (x, y) => {
  const equation = x*x + 3*x + 2*x*y + y + y*y;
  const output = equation + 1358;
  return count_set_bits(output);
}

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
  board.hasBeenVisited = (i, j) => {
    return !!board[i][j];
  }
  board.inRange = (i, j) => {
    return i >= 0 && i < n && j >= 0 && j < n;
  }
  return board;
}

const n = 100;
const board = makeBoard(n);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (countBits(i, j) % 2 !== 0) {
      board.togglePiece(i, j);
    }
  }
}

const visitedMap = {};

const robotPaths = (board, start, end, i, j, steps) => {
  i = i === undefined ? start.x : i;
  j = j === undefined ? start.y : j;
  steps = steps === undefined ? 0 : steps;

  if (i === end.x && j === end.y) {
    return steps;
  }
  if (steps <= 50) {
    visitedMap[`i${i} j${j}`] = true;
  }
  board.togglePiece(i, j);
  const allSteps = [];
  if (board.inRange(i + 1, j) && !board.hasBeenVisited(i + 1, j)) {
    allSteps.push(robotPaths(board, start, end, i + 1, j, steps + 1));
  }
  if (board.inRange(i - 1, j) && !board.hasBeenVisited(i - 1, j)) {
    allSteps.push(robotPaths(board, start, end, i - 1, j, steps + 1));
  }
  if (board.inRange(i, j + 1) && !board.hasBeenVisited(i, j + 1)) {
    allSteps.push(robotPaths(board, start, end, i, j + 1, steps + 1));
  }
  if (board.inRange(i, j - 1) && !board.hasBeenVisited(i, j - 1)) {
    allSteps.push(robotPaths(board, start, end, i, j - 1, steps + 1));
  }
  board.togglePiece(i, j);
  return allSteps.length === 0 ? Infinity : Math.min(...allSteps);
}

console.log(robotPaths(board, { x: 1, y: 1 }, { x: 31, y: 39 }));
console.log(Object.keys(visitedMap).length);