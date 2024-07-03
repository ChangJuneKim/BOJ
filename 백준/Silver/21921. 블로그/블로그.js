const input = require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [N, X] = input[0].split(' ').map(Number);
  const counts = input[1].split(' ').map(Number);

  if (counts.every((count) => count === 0)) {
    console.log('SAD');
    return;
  }

  let max = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < X; i++) {
    sum += counts[i];
  }

  max = sum;
  count = 1;

  for (let i = X; i < N; i++) {
    sum = sum + counts[i] - counts[i - X];

    if (sum > max) {
      max = sum;
      count = 1;
    } else if (sum === max) {
      count++;
    }
  }

  console.log(max);
  console.log(count);
};

solution();
