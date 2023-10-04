const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim();

const open = ["(", "["];
const close = [")", "]"];

const isPair = (top, input) => {
  if(top === open[0] && input === close[0]) return true;
  else return top === open[1] && input === close[1];
};

const solution = () => {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (open.includes(input[i])) {
      stack.push(input[i]);
    } else {
      let currentValue = 0;

      while (stack.length > 0 && !open.includes(stack[stack.length - 1])) {
        currentValue += stack.pop();
      }

      if (stack.length === 0 || !isPair(stack[stack.length - 1], input[i])) {
        return console.log(0);
      } else {
        stack.pop();
        if (input[i] === ")") {
          stack.push(currentValue === 0 ? 2 : 2 * currentValue);
        } else {
          stack.push(currentValue === 0 ? 3 : 3 * currentValue);
        }
      }
    }
  }

  const isValid = !stack.some(elem => typeof elem === 'string');
  if (!isValid) {
    return console.log(0);
  } else {
    console.log(stack.reduce((acc, curr) => acc + curr, 0));
  }
};

solution();
