const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const n = +input[0];

  const queens = [];
  let count = 0;

  dfs(0);

  console.log(count);

  function possible(x, y) {
    for (const [a, b] of queens) {
      if (a === x || b === y) return false;
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
  }

  function dfs(row) {
    if (row === n) {
      count++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  }

};

solution()

