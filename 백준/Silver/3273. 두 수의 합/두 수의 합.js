const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0];
  const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const X = +input[2];

  let count = 0;

  let left = 0;
  let right = N - 1;

  while(left < right){
    const sum = numbers[left] + numbers[right];

    if(sum > X) right--;
    else if(sum < X) left++;
    else {
      left++;
      count++;
    }
  }

  console.log(count);
};

solution();