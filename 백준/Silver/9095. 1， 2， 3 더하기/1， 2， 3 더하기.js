const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const T = +input[0];
  const dp = Array(11).fill(0);

  // 기본 경우 설정
  dp[1] = 1; // 1을 만드는 방법: 1
  dp[2] = 2; // 2를 만드는 방법: 1+1, 2
  dp[3] = 4; // 3을 만드는 방법: 1+1+1, 1+2, 2+1, 3

  for (let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 1; i <= T; i++) {
    const n = +input[i];
    console.log(dp[n]);
  }
};

solution();
