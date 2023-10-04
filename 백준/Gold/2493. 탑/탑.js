const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = +input[0];
  const heights = input[1].split(" ").map(Number);
  const result = Array(N).fill(0);

  for(let i = 0; i < N - 1; i++){
    let j = i;

    while(heights[i + 1] > heights[j] && j !== -1) {
      j = result[j] - 1
    }

    result[i + 1] = j + 1;
  }

  console.log(result.join(" "));
};

solution();
