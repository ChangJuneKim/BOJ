const [A, B, C] = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString()
  .trim()
  .split(' ')
  .map(BigInt);


const solution = (power) => {
  if (power === 1n) {
    return A % C;
  }

  const half = solution(power / 2n) % C;

  if (power % 2n) {
    return (half * half * (A % C)) % C;
  }

  return (half * half) % C;
};

console.log(solution(B).toString());