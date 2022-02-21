const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const solution = input => {
  const numbers = [...input].sort((a, b) => a - b);

  let count = 1;
  let max = 0;
  let same = 0;
  for (let i = 0; i < 3; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (numbers[i] === numbers[i + 1]) {
      same = numbers[i];
      count++;
    }
  }
  if (count === 1) {
    console.log(max * 100);
  } else if (count === 2) {
    console.log(1000 + same * 100);
  } else if (count === 3) {
    console.log(10000 + same * 1000);
  }
};

solution(input);