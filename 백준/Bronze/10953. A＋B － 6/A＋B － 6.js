const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const N = +input[0];
  const testCases = input.slice(1).map(v => v.split(',').map(v => +v));

  for (let i = 0; i < N; i++) {
    const [A, B] = testCases[i];

    console.log(A + B);
  }
};
solution(input);