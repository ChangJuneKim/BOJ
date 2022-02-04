const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const solution = input => {
  const [x, y, w, h] = input;
  console.log(Math.min(x, y, h - y, w - x));
};

solution(input);
