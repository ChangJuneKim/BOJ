const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim()

const solution = () => {
  const stack = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push(input[i]);
    } else {
      stack.pop();
      if (input[i - 1] === '(') {
        count += stack.length; // 레이저로 인한 절단
      } else {
        count += 1; // 쇠막대기의 끝 부분
      }
    }
  }

  console.log(count);
};

solution();
