let input = '11101000110010100';

const diskSize = 272;
// const diskSize = 35651584;

while (input.length < diskSize) {
  input += `0${input.split('').reduce((a, c) => 1 - +c + a , '')}`;
}

input = input.slice(0, diskSize);
while (input.length % 2 === 0) {
  cs = '';
  for (let i = 0; i < input.length; i += 2) {
    cs += input[i] === input[i + 1] ? '1' : '0';
  }
  input = cs;
}

console.log(cs);
