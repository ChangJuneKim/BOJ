const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const numbers = input.slice(1).map(Number);

  let stack = [];
  let current = 1;
  let result = [];

  for (let num of numbers) {
    while (current <= num) {
      stack.push(current);
      result.push('+');
      current++;
    }

    if (stack[stack.length - 1] === num) {
      stack.pop();
      result.push('-');
    } else {
      console.log('NO');
      return;
    }
  }

  console.log(result.join('\n'));
};

solution();
