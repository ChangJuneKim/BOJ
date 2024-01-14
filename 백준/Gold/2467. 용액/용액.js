const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const list = input[1].split(" ").map(Number);

  const result = findClosestToZero();

  console.log(result.join(" "));

  function findClosestToZero() {
    let min = Infinity;
    let left = 0;
    let right = N - 1;

    let bestPair = [];

    while (left < right) {
      let sum = list[left] + list[right];

      if (Math.abs(sum) < Math.abs(min)) {
        min = sum;
        bestPair = [list[left], list[right]]
      }

      if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }

    return bestPair;
  }


};

solution();