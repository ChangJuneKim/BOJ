const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0];
  const Parenthesis = input.slice(1);

  let result = '';

  Parenthesis.forEach(parenthesis => {
    const stack = [];
    let isVPS = true;
    for (const char of parenthesis) {
      if (char === '(') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          isVPS = false;
          break;
        } else {
          stack.pop();
        }
      }
    }

    if (stack.length !== 0) isVPS = false;

    result += isVPS ? 'YES\n' : 'NO\n';
  });

  console.log(result.trim());
};

solution();