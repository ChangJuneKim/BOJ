const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');


const solution = () => {
  const K = +input[0];
  const numbers = input.slice(1).map(Number);

  const stack = []
  numbers.forEach(number => {
    if(number === 0) stack.pop();
    else stack.push(number);
  })

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
};

solution();