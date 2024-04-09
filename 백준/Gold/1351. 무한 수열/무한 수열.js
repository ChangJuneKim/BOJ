const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const solution = () => {
  const [N, P, Q] = input[0].split(' ').map(Number);
  const memo = new Map();

  const A = (i) => {
    if (memo.has(i)) return memo.get(i);
    memo.set(i, A(Math.floor(i / P)) + A(Math.floor(i / Q)));
    return memo.get(i);
  };

  memo.set(0, 1); // 기본 조건 설정
  console.log(A(N));
};

solution();
