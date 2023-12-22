const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const countTrailingZerosInFactorial = (N) => {
  let count = 0;
  while (N >= 5) {
    N = Math.floor(N / 5);
    count += N;
  }
  return count;
};

const solution = () => {
  const number = +input[0];
  const result = countTrailingZerosInFactorial(number);
  console.log(result);
};

solution();