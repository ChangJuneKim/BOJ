const input =  require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const solution = () => {
  const n = +input;
  const f = Array(n + 1).fill(0);
  const g = Array(n + 1).fill(0);

  // 각 숫자의 약수의 합 계산 (O(n log n))
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      f[j] += i;
    }
  }

  // g(n) 계산 (O(n))
  for (let i = 1; i <= n; i++) {
    g[i] = g[i - 1] + f[i];
  }

  console.log(g[n]);
};

solution();
