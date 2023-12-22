const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const L = parseInt(input[0], 10);
  const string = input[1];
  const r = 31;
  const M = 1234567891;
  let hash = 0;

  for (let i = 0; i < L; i++) {
    hash = (hash + (string.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * modPow(r, i, M)) % M;
  }

  console.log(hash);
};

function modPow(base, exponent, modulus) {
  if (modulus === 1) return 0;
  var result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) result = (result * base) % modulus;
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}

solution();
