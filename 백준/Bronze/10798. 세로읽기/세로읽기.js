const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(''));

const solution = input => {
  let answer = '';

  let maxWidth = 0;
  let maxHeight = input.length;

  for (let i = 0; i < maxHeight; i++) {
    if (maxWidth < input[i].length) {
      maxWidth = input[i].length;
    }
  }

  for (let i = 0; i < maxWidth; i++) {
    for (let j = 0; j < maxHeight; j++) {
      input[j][i] ? (answer += input[j][i]) : '';
    }
  }
  console.log(answer);
};

solution(input);
