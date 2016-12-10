const fs = require('fs');

let input = fs.readFileSync('./day10.txt', 'utf8');
input = input.split('\n');

class Bot {
  constructor() {
    this.vals = [];
    this.instructions = [];
  }
}

const bots = {};
const queue = [];
const output = {};

input.map((line) => {
  return line.split(' ');
}).forEach((line) => {
  if (line.length === 6) {
    const val = line[1];
    const botNum = line[5];
    if (!bots[botNum]) { bots[botNum] = new Bot(); }      
    bots[botNum].vals.push(val);
    if (bots[botNum].vals.length === 2) { queue.push(botNum) }
  } else {
    const botNum = line[1];
    if (!bots[botNum]) { bots[botNum] = new Bot(); }
    const selectorLow = line[5];
    const lowVal = line[6];
    const selectorHigh = line[10];
    const highVal = line[11];
    const instruction = {
      low: [selectorLow, lowVal],
      high: [selectorHigh, highVal],
    }
    bots[botNum].instructions.push(instruction);
  }
});


while (queue.length) {
  const botNum = queue.pop();
  const instruction = bots[botNum].instructions.shift();
  const v1 = bots[botNum].vals.pop();
  const v2 = bots[botNum].vals.pop();
  const lowVal = '' + Math.min(+v1, +v2);
  const highVal = '' + Math.max(+v1, +v2);
  const selectorLow = instruction.low[0];
  const lowBot = instruction.low[1];
  const selectorHigh = instruction.high[0];
  const highBot = instruction.high[1];
  if ((v1 === '61' && v2 === '17') || (v1 === '17' && v2 === '61')) {
    console.log(botNum);
  }
  if (selectorLow === 'bot') {
    bots[lowBot].vals.push(lowVal);
    bots[lowBot].vals.length === 2 ? queue.push(lowBot) : null;
  } else {
    output[lowBot] = lowVal;
  }
  if (selectorHigh === 'bot') {
    bots[highBot].vals.push(highVal);
    bots[highBot].vals.length === 2 ? queue.push(highBot) : null;
  } else {
    output[highBot] = highVal;
  }
}
console.log(output[0] * output[1] * output[2]);
// console.log(bots);
 // comparing value-61 microchips with value-17 microchips?