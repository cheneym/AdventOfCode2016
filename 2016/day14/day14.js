const crypto = require('crypto');

let keys = 0;
const hashes = [];
const puzzle = 'ahsbgdzn';

// // Part 1
// for (let i = 0; i < 30000; i++) {
//   const data = `${puzzle}${i}`;
//   const hash = crypto.createHash('md5').update(data).digest("hex");
//   hashes.push(hash);
// }

// Part 2
for (let i = 0; i < 30000; i++) {
  const data = `${puzzle}${i}`;
  let hash = crypto.createHash('md5').update(data).digest("hex");
  for (let j = 0; j < 2016; j++) {
    hash = crypto.createHash('md5').update(hash).digest("hex");
  }
  hashes.push(hash);
}

let i = 0;
while (keys < 64) {
  const match = hashes[i].match(/(.)\1\1/);
  if (match) {
    const char = match[0][0];
    const newStr = `${char}${char}${char}${char}${char}`;
    let mark = false;
    for (let j = i + 1; j < 1001 + i; j++) {
      if (hashes[j].includes(newStr)) { mark = true; }
    }
    if (mark) { keys++; }
  }
  if (keys < 64) { i++; }
}

console.log(i);
