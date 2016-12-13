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

// const makeBoard = function(n) {
//   const board = [];
//   for (let i = 0; i < n; i++) {
//     board.push([]);
//     for (let j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.togglePiece = function(i, j) {
//     this[i][j] = !this[i][j];
//   };
//   board.hasBeenVisited = function(i, j) {
//     return !!this[i][j];
//   };
//   return board;
// };



// const robotPaths = function(n, i, j, steps) {
//   if ((i === 31) && (j === 39)) {
//     return steps;
//   }
//   board.togglePiece(i, j);
//   const allSteps = [];
//   if ((i - 1 >= 0) && !board.hasBeenVisited(i - 1, j)) {
//     allSteps.push(robotPaths(n, i - 1, j, steps + 1));
//   }
//   if ((i + 1 < n) && !board.hasBeenVisited(i + 1, j)) {
//     allSteps.push(robotPaths(n, i + 1, j, steps + 1));
//   }
//   if ((j - 1 >= 0) && !board.hasBeenVisited(i, j - 1)) {
//     allSteps.push(robotPaths(n, i, j - 1, steps + 1));
//   }
//   if ((j + 1 < n) && !board.hasBeenVisited(i, j + 1)) {
//     allSteps.push(robotPaths(n, i, j + 1, steps + 1));
//   }

//   board.togglePiece(i, j);
//   if (allSteps.length === 0) {
//     return Infinity;
//   }
//   return Math.min(...allSteps);
// };

// const board2 = makeBoard(n);

// const robotPaths2 = function(n, i, j, steps) {
//   if (!board2[i][j]) {
//     board2.togglePiece(i, j);
//   }
//   if (steps === 50) { return; }
//   board.togglePiece(i, j);
//   if ((i - 1 >= 0) && !board.hasBeenVisited(i - 1, j)) {
//     robotPaths2(n, i - 1, j, steps + 1);
//   }
//   if ((i + 1 < n) && !board.hasBeenVisited(i + 1, j)) {
//     robotPaths2(n, i + 1, j, steps + 1);
//   }
//   if ((j - 1 >= 0) && !board.hasBeenVisited(i, j - 1)) {
//     robotPaths2(n, i, j - 1, steps + 1);
//   }
//   if ((j + 1 < n) && !board.hasBeenVisited(i, j + 1)) {
//     robotPaths2(n, i, j + 1, steps + 1);
//   }
//   board.togglePiece(i, j);
// };

// console.log(robotPaths(n, 1, 1, 0));  // answer for part 1

// robotPaths2(n, 1, 1, 0);
// let count = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     count += board2[i][j];
//   }
// }
// console.log(count); // answer for part 2



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

const robotPaths = (board, start, end, i, j, steps) => {
  i = i === undefined ? start.x : i;
  j = j === undefined ? start.y : j;
  steps = steps === undefined ? 0 : steps;

  if (i === end.x && j === end.y) {
    return steps;
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