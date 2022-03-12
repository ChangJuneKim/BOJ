const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentElement = arr[mid];

    if (currentElement < val) {
      min = mid + 1;
    } else if (currentElement > val) {
      max = mid - 1;
    } else {
      return 1;
    }
  }
  return 0;
};

const solution = input => {
  // 요소 N개 짜리 배열 A에
  // M가지 수(arr2에 있는 수들이 존재하는지) 존재하면 1, 아니면 0 출력
  const N = +input[0];
  const A = input[1]
    .split(' ')
    .map(v => +v)
    .sort((a, b) => a - b);
  const M = +input[2];
  const B = input[3].split(' ').map(v => +v);

  let answer = '';
  for (let i = 0; i < M; i++) {
    answer += binarySearch(A, B[i]) + '\n';
  }
  console.log(answer.trim());
};

solution(input);