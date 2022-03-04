const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const N = input[0].split(' ').map(v => +v)[0]; // arr 길이
  const S = input[0].split(' ').map(v => +v)[1]; // 합(기준)
  const arr = input[1].split(' ').map(v => +v); // 주어진 수열

  const MAX_NUMBER = 100001;
  let p1 = 0;
  let p2 = 0;
  let sum = arr[0];

  let length = MAX_NUMBER;
  while (p1 <= p2) {
    if (sum >= S) {
      length = Math.min(length, p2 - p1 + 1);
    }

    if (sum < S) {
      if (p2 + 1 === N) break;
      sum += arr[++p2];
    } else {
      sum -= arr[p1++];
    }
  }
  if (length === MAX_NUMBER) {
    console.log(0);
  } else {
    console.log(length);
  }
};

solution(input);
