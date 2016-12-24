const fs = require('fs');

const data = fs.readFileSync('./day24.txt', 'utf8');
const board = data.split('\n').map(line => line.split(''));

const map = {};

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (!isNaN(+board[i][j])) {
      map[board[i][j]] = {x: i, y: j};
    }
  }
}

const validPos = (i, j) => {
  if (i >= 0 && i < board.length && j >= 0 && j < board[0].length && board[i][j] !== '#') {
    return true;
  }
  return false;
}

const bfs = (start, end) => {
  const q = [{ x: start.x, y: start.y, level: 0 }];
  const visited = {};
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (q.length) {
    const coord = q.shift();
    console.log(coord);
    if (coord.x === end.x && coord.y === end.y) {
      return coord.level;
    }
    visited[coord.x + ' ' + coord.y] = true;
    moves.forEach((move) => {
      let newX = coord.x + move[0];
      let newY = coord.y + move[1];
      if (validPos(newX, newY) && !visited[newX + ' ' + newY]) {
        q.push({ x: newX, y: newY, level: coord.level + 1 });
      }
    })
  }

  return null;
}


// const kvp = Object.values(map);
// console.log(bfs(kvp[3], kvp[5]));
// const map2 = {};
// for (let i = 0; i < kvp.length; i++) {
//   for (let j = 0; j < kvp.length; j++) {
//     if (i !== j) {
//       map2[i + ' ' + j] = bfs(kvp[i], kvp[j]);
//       console.log(map2);
//     }
//   }
// }
// console.log(map2);