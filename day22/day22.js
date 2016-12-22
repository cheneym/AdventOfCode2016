const fs = require('fs');

let input = fs.readFileSync('./day22.txt', 'utf8');
input = input.split('\n');

let count = 0;
let rowLen = 0;
let colLen = 0;
const allUsedSizes = [];
const allMaxSizes = [];
const allAvailSizes = [];
const gc = { x: 0, y: 0 };
const sc = { x: 0, y: 0 };
for (let i = 2; i < input.length; i++) {
  const data = input[i].split(' ');
  let j = 0;
  while (j < data.length) { data[j] === '' ? data.splice(j, 1) : j++; }
  const disk = data[0];
  const x = +disk.split('-')[1].slice(1);
  const y = +disk.split('-')[2].slice(1);
  colLen = Math.max(colLen, x + 1);
  rowLen = Math.max(rowLen, y + 1);

  const maxSize = +data[1].slice(0, -1);
  const usedSize = +data[2].slice(0, -1);
  if (usedSize === 0) {
    sc.x = x;
    sc.y = y;
  }
  const availSize = +data[3].slice(0, -1); 
  for (let j = allUsedSizes.length - 1; j >= 0; j--) {
    if (usedSize && (usedSize <= allAvailSizes[j])) { count++; }
    if (allUsedSizes[j] && (allUsedSizes[j] <= availSize)) { count++; }
  }
  allUsedSizes.push(usedSize);
  allMaxSizes.push(maxSize);
  allAvailSizes.push(availSize);
}

const pc = { x: colLen - 1, y: 0 };
const boardStr = allUsedSizes.map(val => val > 400 ? '|' : '.').join('');
let board = [];
for (let i = 0; i < boardStr.length; i += rowLen) {
  board.push(boardStr.slice(i, i + rowLen).split(''));
}
board[sc.x][sc.y] = '_';   // starting
board[pc.x][pc.y] = 'P';   // pickup
board[gc.x][gc.y] = 'G';   // goal
board = board.map(line => line.join(''));
console.log(board);
const sol = sc.x + sc.y + pc.x + (colLen - 2) * 5;
console.log(sol);