const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

const N = input[0];
const numbers = input.slice(1, N + 1);

const solution = (N, numbers) => {
  const answer = [];
  for (let i = 0; i < N; i++) {
    if (numbers[i] !== 0) {
      answer.push(numbers[i]);
    } else {
      answer.pop();
    }
  }
  console.log(answer.reduce((acc, cur) => acc + cur, 0));
};

solution(N, numbers);
