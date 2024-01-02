const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  let inputIndex = 0;
  const number = +input[inputIndex++];
  const numbers = input.slice(1).map(v => v.split(" ").map(Number));

  numbers.sort((a, b) => {
  if(a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

  console.log(numbers.map(v => v.join(" ")).join("\n"));

};


solution();
