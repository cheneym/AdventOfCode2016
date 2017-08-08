const fs = require('fs');

let inputx = fs.readFileSync('./day21.txt', 'utf8');

const swapPos = (i, j, a) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
};

const swapChars = (c1, c2, a) => {
  const i = a.indexOf(c1);
  const j = a.indexOf(c2);
  a[i] = c2;
  a[j] = c1;
};

const rotate = (dir, n, a) => {
  const copy = a.slice();
  const len = copy.length;
  copy.forEach((item, i) => {
    const index = dir === 'right' ? (i + n) % len
                  : (i - n + 2 * len) % len;
    a[index] = item;
  });
};

const reverse = (i, j, a) => {
  while (i < j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
  }
};

const move = (i, j, a) => {
  const char = a.splice(i, 1)[0];
  a.splice(j, 0, char);
};

const scramble = (str, input, rev) => {
  str = str.split('');
  input = input.split('\n');
  instructions = rev ? input.reverse() : input;
  instructions.forEach((line) => {
    const instr = line.split(' ');
    if (instr[0] === 'swap') {
      if (instr[1] === 'position') {
        const ind1 = +instr[2];
        const ind2 = +instr[5];
        swapPos(ind1, ind2, str);
      } else {
        const c1 = instr[2];
        const c2 = instr[5];
        swapChars(c1, c2, str);
      }
    } else if (instr[0] === 'reverse') {
      const ind1 = +instr[2];
      const ind2 = +instr[4];
      reverse(ind1, ind2, str);
    } else if (instr[0] === 'rotate') {
      if (instr[1] === 'based') {
        let letter = instr[6];
        let letterIndex = str.indexOf(letter);
        if (rev) {
          const map = {
            1 : 0,
            3 : 1,
            5 : 2,
            7 : 3,
            2 : 4,
            4 : 5,
            6 : 6,
            0 : 7,
          }
          letterIndex = map[letterIndex];
        }
        const rotateDir = rev ? 'left' : 'right';
        letterIndex >= 4 ? rotate(rotateDir, letterIndex + 2, str)
                         : rotate(rotateDir, letterIndex + 1, str);
      } else {
        let dir = instr[1];
        if (rev) {
          const map = {
            left: 'right',
            right: 'left',
          }
          dir = map[dir];
        }
        const amt = +instr[2];
        rotate(dir, amt, str);
      }
    } else if (instr[0] === 'move') {
      const ind1 = +instr[2];
      const ind2 = +instr[5];
      rev ? move(ind2, ind1, str) : move(ind1, ind2, str);
    }
  });
  console.log(str.join(''));
}

let startStr = 'abcdefgh';
scramble(startStr, inputx, false); // bdfhgeca

startStr = 'fbgdceah';
scramble(startStr, inputx, true);  // gdfcabeh
