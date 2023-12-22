const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const T = +input[0];
  const results = [];

  const dp = Array.from(Array(41), () => [0, 0]);
  dp[0] = [1, 0]; // fibonacci(0)은 0을 1번, 1을 0번 출력
  dp[1] = [0, 1]; // fibonacci(1)은 0을 0번, 1을 1번 출력

  for (let i = 2; i <= 40; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0]; // i번째 숫자에서 0이 출력되는 횟수
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1]; // i번째 숫자에서 1이 출력되는 횟수
  }

  for (let i = 1; i <= T; i++) {
    const n = +input[i];
    results.push(`${dp[n][0]} ${dp[n][1]}`);
  }

  console.log(results.join('\n'));
};

solution();