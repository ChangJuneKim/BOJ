const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  const strings = input.split('-');

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].indexOf('+') > -1) {
      strings[i] = strings[i]
        .split('+')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    }
  }
  const numbers = strings.map(Number);

  console.log(2 * numbers[0] - numbers.reduce((acc, cur) => acc + cur, 0));
};
solution(input);