const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const n = +input[0]; // 수열의 크기
  const arr = input[1].split(' ').map(v => +v); // 주어진 수열
  const x = +input[2]; // 찾을 값(arr[p1] + arr[p2])

  let p1 = 0;
  let p2 = n - 1;

  let count = 0;

  const sortedArr = arr.sort((a, b) => a - b);
  let sum = 0;

  while (p1 < p2) {
    sum = sortedArr[p1] + sortedArr[p2];
    if (sum === x) {
      count++;
    }
    if (sum <= x) {
      p1++;
    } else {
      p2--;
    }
  }

  console.log(count);
};

solution(input);