const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const N = +input[0];
  const arrA = input[1].split(' ').map(v => +v);
  const arrB = input[2].split(' ').map(v => +v);

  const ascArrA = arrA.sort((a, b) => a - b);
  const descArrB = arrB.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += ascArrA[i] * descArrB[i];
  }

  console.log(sum);
};

solution(input);