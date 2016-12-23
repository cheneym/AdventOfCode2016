const fs = require('fs');

let input = fs.readFileSync('./day23.txt', 'utf8');
input1 = input.split('\n').map(line => line.split(' '));
input2 = input.split('\n').map(line => line.split(' '));

const toggle = (index, data) => {
  const s = data[index][0];
  const map = {
    cpy: 'jnz',
    dec: 'inc',
    inc: 'dec',
    jnz: 'cpy',
    tgl: 'inc',
  }
  data[index][0] = map[data[index][0]];
}

const compute = (start, instructions) => {
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
    }
  }

  return registers.a;
}

// Part 1
console.log(compute(7, input1));

// Part 2
const factorial = n => n <= 1 ? n : n * factorial(n - 1);
const offset = compute(7, input2) - factorial(7);
console.log(factorial(12) + offset);
