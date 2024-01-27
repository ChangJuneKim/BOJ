const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = +input[0];

  console.log(N % 2 === 0 ? "CY" : "SK");
};

solution();
