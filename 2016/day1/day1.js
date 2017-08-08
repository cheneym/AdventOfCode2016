const fs = require('fs');

let input = fs.readFileSync('./day1.txt', 'utf8');
input = input.split('\n').join(' ').split(', ');

const rotateCL90 = (dir) => {
  const map = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N',
  };

  return map[dir];
}

const rotateCC90 = (dir) => {
  const map = {
    'S': 'E',
    'W': 'S',
    'N': 'W',
    'E': 'N',
  };

  return map[dir];
}

const dirs = {
  'N': [1, 0],
  'S': [-1, 0],
  'E': [0, 1],
  'W': [0, -1],
}

const d = [0, 0];
const visited = { '0 0': true };
let ftv;
let dir = 'N';

for (let i = 0; i < input.length; i++) {
  dir = input[i][0] === 'L' ? rotateCC90(dir) : rotateCL90(dir);
  const amt = +input[i].slice(1);
  const dy = dirs[dir][0];
  const dx = dirs[dir][1];
  for (let j = 0; j < Math.abs(amt); j++) {
    d[0] += dy;
    d[1] += dx;
    if (!ftv && visited[`${d[0]} ${d[1]}`]) {
      ftv = [d[0], d[1]];
    }
    visited[`${d[0]} ${d[1]}`] = true;
  }
}

// Part 1
console.log(Math.abs(d[0]) + Math.abs(d[1]));

// Part 2
console.log(Math.abs(ftv[0]) + Math.abs(ftv[1]));
