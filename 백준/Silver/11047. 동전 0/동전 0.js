const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const N = input[0].split(' ').map(v => +v)[0];
  let K = input[0].split(' ').map(v => +v)[1];
  const [...coins] = input
    .slice(1)
    .map(v => +v)
    .reverse();

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (K / coins[i] < 1) {
      continue;
    } else {
      count = Math.floor(count + K / coins[i]);
      K = K % coins[i];
    }
  }

  // 4200 / 1000;
  console.log(count);
};

solution(input);
