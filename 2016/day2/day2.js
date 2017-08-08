const fs = require('fs');

const input = fs.readFileSync('./day2.txt', 'utf8');


// Part 1

const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const updatePosition = (pos, dir, amt) => {
  if (dir === 'U') {
    pos[0] = Math.max(0, pos[0] - amt);
  } else if (dir === 'D') {
    pos[0] = Math.min(keypad.length - 1, pos[0] + amt);
  } else if (dir === 'R') {
    pos[1] = Math.min(keypad.length - 1, pos[1] + amt);
  } else {
    pos[1] = Math.max(0, pos[1] - amt);
  }
};

const password = input.split('\n').map((line) => {
  let dir = line[0];
  let count = 0;
  let pos = [1, 1];
  
  for (let i = 0; i < line.length; i++) {
    if (line[i] === dir) {
      count++;
    } else {
      updatePosition(pos, dir, count);
      dir = line[i];
      count = 1;
    }
  }
  updatePosition(pos, dir, count);

  return keypad[pos[0]][pos[1]];
}).join('');

console.log(password);


// Part 2

const keypad2 = {
  '-2': {
    '0': '1',
  },
  '-1': {
    '-1': '2',
    '0': '3',
    '1': '4',
  },
  '0': {
    '-2': '5',
    '-1': '6',
    '0': '7',
    '1': '8',
    '2': '9',
  },
  '1': {
    '-1': 'A',
    '0': 'B',
    '1': 'C',
  },
  '2': {
    '0': 'D',
  },
};

const updatePosition2 = (pos, dir, amt) => {
  if (dir === 'U') {
    pos[0] = Math.max(-2 + Math.abs(pos[1]), pos[0] - amt);
  } else if (dir === 'D') {
    pos[0] = Math.min(2 - Math.abs(pos[1]), pos[0] + amt);
  } else if (dir === 'R') {
    pos[1] = Math.min(2 - Math.abs(pos[0]), pos[1] + amt);
  } else {
    pos[1] = Math.max(-2 + Math.abs(pos[0]), pos[1] - amt);
  }
};

const password2 = input.split('\n').map((line) => {
  let dir = line[0];
  let count = 0;
  let pos = [0, 0];
  
  for (let i = 0; i < line.length; i++) {
    if (line[i] === dir) {
      count++;
    } else {
      updatePosition2(pos, dir, count);
      dir = line[i];
      count = 1;
    }
  }
  updatePosition2(pos, dir, count);
  
  return keypad2[pos[0]][pos[1]];
}).join('');

console.log(password2);
