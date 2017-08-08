const fs = require('fs');

const data = fs.readFileSync('./day24.txt', 'utf8');
const board = data.split('\n');

const digitsMap = {};

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (!isNaN(+board[i][j])) {
      digitsMap[board[i][j]] = {x: i, y: j};
    }
  }
}

const validPos = (x, y) => {
  if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y] !== '#') {
    return true;
  }
  return false;
}

const bfs = (start, end) => {
  const q = [start];
  const visited = {};
  const level = {};
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  let pos = `${start.x} ${start.y}`;
  visited[pos] = true;
  level[pos] = 0;
  while (q.length) {
    const coord = q.shift();
    pos = `${coord.x} ${coord.y}`;

    if (coord.x === end.x && coord.y === end.y) {
      return level[pos];
    }

    moves.forEach((move) => {
      let newX = coord.x + move[0];
      let newY = coord.y + move[1];
      let newPos = `${newX} ${newY}`;
      if (validPos(newX, newY) && !visited[newPos]) {
        q.push({ x: newX, y: newY });
        visited[newPos] = true;
        level[newPos] = level[pos] + 1;
      }
    })
  }

  return null;
}

const digitLocations = Object.values(digitsMap);

const digitDistance = {};
for (let i = 0; i < digitLocations.length; i++) {
  for (let j = 0; j < digitLocations.length; j++) {
    if (i !== j) {
      digitDistance[`${i} ${j}`] = bfs(digitLocations[i], digitLocations[j]);
    }
  }
}

// Part 1

const shortestPath = (fromDigit, digits, sum) => {
  sum = sum || 0;
  if (digits.length === 0) { return sum; }
  return digits.split('').reduce((acc, toDigit, index) => {
    const newstr = digits.slice(0, +index) + digits.slice(+index + 1);
    return Math.min(acc, shortestPath(+toDigit, newstr, sum + digitDistance[`${fromDigit} ${toDigit}`]));
  }, Infinity);
};

console.log(shortestPath('0', '1234567'));



// Part 2

const shortestRoundTrip = (fromDigit, digits, sum) => {
  sum = sum || 0;
  if (digits.length === 0) {
    return sum + digitDistance[`${fromDigit} 0`];
  }
  return digits.split('').reduce((acc, toDigit, index) => {
    const newstr = digits.slice(0, +index) + digits.slice(+index + 1);
    return Math.min(acc, shortestRoundTrip(+toDigit, newstr, sum + digitDistance[`${fromDigit} ${toDigit}`]));
  }, Infinity);
};

console.log(shortestRoundTrip('0', '1234567'));
