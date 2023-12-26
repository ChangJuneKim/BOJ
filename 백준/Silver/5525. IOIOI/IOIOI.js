const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, M, S] = input.map(v => !isNaN(Number(v)) ? +v : v);

  let count = 0;
  let patternCount = 0;

  for (let i = 1; i < M - 1; i++) {
    if (S[i - 1] === 'I' && S[i] === 'O' && S[i + 1] === 'I') {
      patternCount++;
      if (patternCount === N) {
        count++;
        patternCount--;
      }
      i++;
    } else {
      patternCount = 0;
    }
  }

  console.log(count);
};

solution();