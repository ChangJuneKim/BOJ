const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {

  const N = +input[0];
  const primes = getPrimes(N);
  let count = 0;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (left < primes.length && right < primes.length) {
    if (sum <= N) {
      if (sum === N) count++;
      sum += primes[right++];
    } else {
      sum -= primes[left++];
    }
  }

  if (primes[primes.length - 1] === N) count++;

  console.log(count);

  function getPrimes(n) {
    const prime = [];
    const arr = Array(n + 1).fill(true);
    arr[0] = arr[1] = false; // 0과 1은 소수가 아님

    for(let i = 2; i <= n; i++) {
      if(arr[i]) {
        prime.push(i);
        for(let j = i * 2; j <= n; j += i) {
          arr[j] = false;
        }
      }
    }

    return prime;
  }
};

solution();
