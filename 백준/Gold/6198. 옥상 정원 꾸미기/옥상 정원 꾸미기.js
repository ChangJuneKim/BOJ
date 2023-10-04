const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n").map(Number);

const solution = () => {
  const N = input[0];
  const heights = input.slice(1);
  const stack = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    while (stack.length > 0) {
      if (stack.at(-1) <= heights[i]) stack.pop();
      else break;
    }

    count += stack.length;
    stack.push(heights[i]);
  }

  console.log(count);
};

solution();