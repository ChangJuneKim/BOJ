const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(v => +v));

// 배열의 요소의 개수 (N개)
// M 찾고자 하는 배열 요소의 합
// numsArr 배열

const solution = input => {
  const [N, M] = input[0];
  const numsArr = input[1];

  let count = 0;
  let sum = 0;
  let p1 = 0;
  let p2 = 0;

  while (1) {
    if (sum >= M) {
      sum = sum - numsArr[p1++];
    } else if (p2 === N) {
      break;
    } else {
      sum = sum + numsArr[p2++];
    }

    if (sum === M) {
      count++;
    }
  }
  console.log(count);
};

solution(input);
