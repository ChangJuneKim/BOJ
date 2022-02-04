const fs = require('fs');
const filePath =  '/dev/stdin';

const input = +fs.readFileSync(filePath).toString().trim();

const solution = input => {
  if (input === 0) return 0;
  if (input === 1) return 1;
  return solution(input - 1) + solution(input - 2);
};

console.log(solution(input));