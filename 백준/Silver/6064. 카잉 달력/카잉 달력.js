const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const T = +input[0];

  for(let i = 1; i <= T; i++) {
    const [M, N, x, y] = input[i].split(" ").map(Number);
    let found = false;
    let year = x;

    while (year <= M * N) {
      if ((year - y) % N === 0) {
        console.log(year);
        found = true;
        break;
      }
      year += M;
    }

    if (!found) {
      console.log(-1);
    }
  }
};

solution();
