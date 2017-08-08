const fs = require('fs');

let input = fs.readFileSync('./day25.txt', 'utf8');

const toggle = (index, data) => {
  const s = data[index][0];
  const map = {
    cpy: 'jnz',
    dec: 'inc',
    inc: 'dec',
    jnz: 'cpy',
    tgl: 'inc',
    out: 'inc',
  }
  data[index][0] = map[data[index][0]];
}

const compute = (start, data, alt) => {
  let breakCount = 0;
  const instructions = data.split('\n').map(line => line.split(' '));
  const registers = { a: start };
  for (let i = 0; i < instructions.length; i++) {
    ins = instructions[i];
    const arg1 = ins[1];
    const arg2 = ins[2];
    const val1 = isNaN(+arg1) ? registers[arg1] : +arg1;
    const val2 = isNaN(+arg2) ? registers[arg2] : +arg2;
    if (ins[0] === 'cpy') {
      registers[arg2] = val1;
    } else if (ins[0] === 'dec') {
      registers[arg1]--;
    } else if (ins[0] === 'inc') {
      registers[arg1]++;
    } else if (ins[0] === 'jnz' && val1 !== 0) {
      i += val2 - 1;
    } else if (ins[0] === 'tgl' && i + val1 < instructions.length) {
      toggle(i + registers[arg1], instructions);
    } else if (ins[0] === 'out') {
      if (alt === val1) {
        alt = 1 - alt;
        breakCount++;
        if (breakCount > 100) { return start; }
      } else {
        return null;
      }
    }
  }

  return registers.a;
}

// Part 1

let z = 1;
while (compute(z, input, 0) === null) {  z++; }
console.log(z);
