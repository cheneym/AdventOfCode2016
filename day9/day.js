const fs = require('fs');

let input = fs.readFileSync('./day9.txt', 'utf8');
// let input = '(27x12)(20x12)(13x14)(7x10)(1x12)A';
// let input = '(27x12)(20x12)(13x14)(7x10)(1x12)A';
// let input = '(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN';
input = input.split('\n');

let results = [];
// let contains = true;
const parseData = (input) => {
  input.forEach((line, ind) => {
    let result = '';
    for (var i = 0; i < line.length ;i++) {
      let tempExpand = '';
      let multiplier = '';
      let numChars = '';
      if (line[i] === '(') {
        i++;
        while (line[i] !== 'x') {
          numChars += line[i];
          i++;
        }
        i++;
        while (line[i] !== ')') {
          multiplier += line[i];
          i++;
        }
        i++;
        numChars = +numChars;
        multiplier = +multiplier;
        let currIndex = i;
        for (; i < line.length && (i < currIndex + numChars); i++) {
          tempExpand += line[i];
        }
        for (let j = 0; j < multiplier; j++) {
          result += tempExpand;
        }
        i--;
      } else {
        result += line[i];
      }
    }
    // if (result.match(/\(/)) {
    //   // contains = true;
    // }
    // console.log(result);
    results[ind] = (result);
  }); 
}

// while (contains) {
  // contains = false;
  parseData(input);
  // input = results;
// }

let count = 0;
results.forEach(result => {
  count += result.length;
})
console.log(count);
// console.log(results);