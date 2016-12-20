const fs = require('fs');

let input = fs.readFileSync('./day20.txt', 'utf8');
input = input.split('\n')
  .map(line => line.split('-').map(a => +a))
  .sort((range1, range2) => range1[0] - range2[0]);

const acceptedIps = [];
let rangeCovered = 0;

for (let i = 0; i < input.length; i++) {
  const startRange = +input[i][0];
  const endRange = +input[i][1];
  if (startRange > rangeCovered) {
    for (let j = rangeCovered + 1; j < startRange; j++) {
      acceptedIps.push(j);
    }
  }
  rangeCovered = Math.max(endRange, rangeCovered);
}

console.log(acceptedIps[0]);
console.log(acceptedIps.length);
