const fs = require('fs');
const crypto = require('crypto');

const puzzle = fs.readFileSync('./day5.txt', 'utf8');

let password = '';
let hash;
let i = 0;

// Part 1

while (password.length < 8) {
  hash = crypto.createHash('md5').update(`${puzzle}${i}`).digest("hex");
  if (hash.slice(0, 5) === '00000') {
    password += hash[5];
  }
  i++;
}

console.log(password);


// Part 2

let count = 0;
password = [];
i = 0;

while (count < 8) {
  hash = crypto.createHash('md5').update(`${puzzle}${i}`).digest("hex");
  if (hash.slice(0, 5) === '00000') {
    let pos = +hash[5];
    let chr = hash[6];
    if (!isNaN(pos) && pos < 8 && !password[pos]) {
      count++;
      password[pos] = chr;
    }
  }
  i++;
}

console.log(password.join(''));