const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [H, W, N, M] = input[0].split(" ").map(Number);

  // const room = Array.from({length: H}, () => Array(W).fill(0));
  let count = 0;


  for (let i = 0; i < H; i += (1 + N)) {
    for (let j = 0; j < W; j += (1 + M)) {
      // room[i][j] = 1;
      count++;
    }
  }

  console.log(count);
};

solution();
