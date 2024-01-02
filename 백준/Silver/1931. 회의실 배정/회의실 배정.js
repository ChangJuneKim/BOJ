const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
    .toString().trim().split("\n");

const N = parseInt(input[0], 10);
const meetings = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

// 끝나는 시간을 기준으로 정렬하고, 같다면 시작 시간을 기준으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 1;
let end = meetings[0][1];
for (let i = 1; i < N; i++) {
  if (meetings[i][0] >= end) {
    count++;
    end = meetings[i][1];
  }
}

console.log(count);