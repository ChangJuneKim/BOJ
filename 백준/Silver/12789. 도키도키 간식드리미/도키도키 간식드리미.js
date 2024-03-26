const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0];
  const people = input[1].split(' ').map(Number);
  const stack = [];
  let current = 1;
  let index = 0; // 대기열에서 현재 처리해야 할 사람의 인덱스

  while (index < N || stack.length > 0) {
    if (index < N && people[index] === current) {
      // 대기열의 맨 앞 사람이 현재 순서와 일치
      current++;
      index++;
    } else if (stack.length > 0 && stack[stack.length - 1] === current) {
      // 대기열 공간의 맨 위 사람이 현재 순서와 일치
      stack.pop();
      current++;
    } else if (index < N) {
      // 현재 처리해야 할 사람을 대기열 공간으로 옮김
      stack.push(people[index]);
      index++;
    } else {
      // 더 이상 진행할 수 없음
      break;
    }
  }

  if (current === N + 1) {
    console.log("Nice");
  } else {
    console.log("Sad");
  }
};

solution();