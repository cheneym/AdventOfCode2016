// const fs = require('fs');

// let input = fs.readFileSync('./day15.txt', 'utf8');
// input = input.split('\n');
// const numPositions = [];
// const startPositions = [];
// input.forEach((line) => {
//   const data = line.split(' ');
//   numPositions.push(+(data[3]));
//   startPositions.push(+(data[data.length - 1].slice(0, -1)));
// });
// const results = [];
// for (let j = 0; )

for (let i = 0; i < 100000000; i++) {
  const y = (i + 1 + 1) % 17;
  const y2 = (i + 0 + 2) % 7;
  const y3 = (i + 2 + 3) % 19;
  const y4 = (i + 0 + 4) % 5;
  const y5 = (i + 0 + 5) % 3;
  const y6 = (i + 5 + 6) % 13;
  const y7 = (i + 0 + 7) % 11;
  if ((y === y2) && (y2 === y3) && (y3 === y4) && (y4 === y5) && (y5 === y6) && (y6 === y7) && (y7 === 0)) {
    console.log(i);
    break;
  }
}