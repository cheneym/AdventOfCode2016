const fs = require('fs');

let input = fs.readFileSync('./day8.txt', 'utf8');
let board = [];

for (let i = 0; i < 6; i++) {
  board[i] = [];
  for (let j = 0; j < 50; j++) {
    board[i][j] = '.';
  }
}

const rect = (x, y) => {
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      board[i][j] = '#';
    }
  }
};

const shiftVertical = (amt, col, brd) => {
  for (let i = 0; i < amt; i++) {
    for (let j = brd.length - 1; j > 0; j--) {
      const newJ = (j + 1) % 6;
      const temp = brd[j][col];
      brd[j][col] = brd[newJ][col];
      brd[newJ][col] = temp;
    }
  }
};

const shiftHorizontal = (amt, row, brd) => {
  const frontHalf = brd[row].slice(-+amt);
  const backHalf = brd[row].slice(0, brd[row].length - +amt);
  brd[row] = frontHalf.concat(backHalf);
}

input = input.split('\n');
input = input.forEach(line => {
  const arrLines = line.split(' ');
  if (arrLines[0] === 'rect') {
    const coords = arrLines[1].split('x');
    rect(+coords[0], +coords[1]);
  } else {  // 'rotate'
    const amt = arrLines[4];
    if (arrLines[1] === 'column') {
      const colNum = arrLines[2].split('=')[1];
      shiftVertical(+amt, +colNum, board);
    } else {  // 'row'
      const rowNum = arrLines[2].split('=')[1];
      shiftHorizontal(+amt, +rowNum, board);      
    }
  }
});

let count = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 50; j++) {
    if (board[i][j] === '#') { count++ };
  }
}

board.forEach(line => {
  let str = '';
  line.forEach(char => {
    str += char;
  })
  console.log(str);
})

console.log(count);