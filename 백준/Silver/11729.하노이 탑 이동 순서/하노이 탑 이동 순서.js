const fs = require('fs');
const filePath =  '/dev/stdin';


const input = +fs.readFileSync(filePath).toString().trim();
//const input = 3;
let count = 0;
let answer = [];

const solution = (input, from, to, other) => {
  // num: 원반의 수
  // from: 원반들이 위치한 곳의 번호
  // to: 원반들을 옮길 목적지 번호
  // other: 나머지 한 곳(목적지가 아닌) 곳 번호
  // 모두 옮겼으면 종료

  if (input === 0) {
    return;
  }

  // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
  solution(input - 1, from, other, to);

  // 가장 아래 원반을 목적지로 옮김
  answer.push([from, to]);
  count++;
  // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
  solution(input - 1, other, to, from);
};

solution(input, 1, 3, 2);
console.log(count);
console.log(answer.map(e => e.join(' ')).join('\n'));
