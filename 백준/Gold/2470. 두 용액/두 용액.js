const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const n = +input[0]; // 용액의 수
  const arr = input[1].split(' ').map(v => +v); // 주어진 용액 배열

  let p1 = 0;
  let p2 = n - 1;

  const sortedArr = arr.sort((a, b) => a - b);

  let closeToZero = 0;
  let tempCloseToZero = Infinity;

  const answer = [];

  while (p1 < p2) {
    closeToZero = sortedArr[p1] + sortedArr[p2];

    if (Math.abs(closeToZero) < tempCloseToZero) {
      tempCloseToZero = Math.abs(closeToZero);
      answer[0] = sortedArr[p1];
      answer[1] = sortedArr[p2];
    }

    if (closeToZero === 0) {
      break;
    } else if (closeToZero > 0) {
      p2--;
    } else if (closeToZero < 0) {
      p1++;
    }
  }
  console.log(answer.join(' '));
};

solution(input);
