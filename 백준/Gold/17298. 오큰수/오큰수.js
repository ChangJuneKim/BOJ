const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n")

const solution = () => {
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);

  let stack = [];
  let result = new Array(N).fill(-1);  // 처음에 모든 결과를 -1로 초기화

  for (let i = 0; i < N; i++) {
    while (stack.length !== 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  console.log(result.join(' '));
};

solution();