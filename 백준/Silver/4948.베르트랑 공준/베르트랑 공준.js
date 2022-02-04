const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => +v)
  .slice(0, -1);

// 1 <= n <= 123,456
const solution = numbers => {
  const max = 123456 * 2;
  const primes = [...Array(max + 1)].fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    let m = 2;
    while (i * m <= max) {
      primes[i * m] = false;
      m++;
    }
  }
  //소수 배열 생성 완료

  for (let i = 0; i < numbers.length; i++) {
    console.log(primes.slice(numbers[i] + 1, numbers[i] * 2 + 1).filter(val => val === true).length);
  }
};

solution(input);
