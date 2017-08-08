const fs = require('fs');

let input = fs.readFileSync('./day15.txt', 'utf8');
input = input.split('\n');
const numPositions = [];
const startPositions = [];
input.forEach((line) => {
  const data = line.split(' ');
  numPositions.push(+(data[3]));
  startPositions.push(+(data[data.length - 1].slice(0, -1)));
});
const results = [];
for (let i = 0; i < 100000000; i++) {
  const v1 = (i + startPositions[0] + 1) % numPositions[0];
  if (numPositions.every((p, ind) =>
      (i + startPositions[ind] + ind + 1) % p === v1)) {
    console.log(i);
    break;
  }
}
