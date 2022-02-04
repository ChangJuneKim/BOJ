const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(a => a.split(' ').map(v => +v));

const solution = input => {
  const a = [];
  const b = [];
  for (let i = 0; i < input.length; i++) {
    a.push(input[i][0]);
    b.push(input[i][1]);
  }
  a.sort();
  b.sort();

  const answer = [];
  a[0] === a[1] ? answer.push(a[2]) : answer.push(a[0]);
  b[0] === b[1] ? answer.push(b[2]) : answer.push(b[0]);
  console.log(answer.join(' '));
};

solution(input);
