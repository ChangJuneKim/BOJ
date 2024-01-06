const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const T = +input[0];

  const P = [0, 1, 1, 1, 2, 2]; // 초기 값 설정

  for (let i = 1; i <= T; i++) {
    const N = +input[i];
    
    for (let j = 6; j <= N; j++) {
      P[j] = P[j - 1] + P[j - 5];
    }
    console.log(P[N]);
  }
};

solution();


