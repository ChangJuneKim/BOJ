const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const N = +input[0];
  const dp = Array(N + 1).fill(0);

  if(N === 1) return console.log(1);
  if(N === 2) return console.log(2);
  if(N === 3) return console.log(3);
  // 기본 경우 설정
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
  }

  console.log(dp[N])
};

solution();
