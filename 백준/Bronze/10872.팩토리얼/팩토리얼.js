const fs = require('fs');
const filePath =  '/dev/stdin';

const input = +fs.readFileSync(filePath).toString().trim();

const solution = input => {
  if (input === 0) return 1;
  if (input === 1) return 1;
  return input * solution(input - 1);
};

console.log(solution(input));
