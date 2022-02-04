const fs = require('fs');
const filePath =  '/dev/stdin';

 const input = fs
   .readFileSync(filePath)
   .toString()
   .trim()
  .split('\n')
  .map(v => +v)
  .slice(1, fs.length);


const solution = numbers => {
  const max = 10000;
  const isPrimes = [...Array(max + 1)].fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    let m = 2;
    while (i * m <= max) {
      isPrimes[i * m] = false;
      m++;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i]; // 8 10 16
    let tmp = n / 2; //약수는 대칭이므로 반만 돌아도 상관없다 4 5 8

    for (let j = tmp; j >= 2; j--) { // 4~2 , 5~2, 8~2
      if (isPrimes[j] && isPrimes[n - j]) { // i가 0일때 if(4 && 4), (3 && 5), (2, 6)
        console.log(j, n - j);
        break;
      }
    }
  }
};

solution(input);
