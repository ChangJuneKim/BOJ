const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const n = +input[0];
  if (n === 0) {
    console.log(0); // 의견이 없는 경우 난이도는 0
    return;
  }

  const ns = input.slice(1).map(Number).sort((a, b) => a - b); // 의견 정렬

  const cut = Math.round(n * 0.15);

  const result = ns.slice(cut, n - cut);
  const avg = Math.round(result.reduce((sum, cur) => sum + cur, 0) / result.length);

  console.log(avg);
};

solution();