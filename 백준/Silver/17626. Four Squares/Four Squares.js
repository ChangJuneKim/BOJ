const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const n = +input[0];

  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let min = 4;

    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }

    dp[i] = min + 1;
  }

  console.log(dp[n]);
};

solution();