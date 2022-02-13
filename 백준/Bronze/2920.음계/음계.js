const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const solution = input => {
  let count = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      count++;
    }
  }

  if (count === 7) {
    console.log('ascending');
  } else if (count === 0) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
};

solution(input);
