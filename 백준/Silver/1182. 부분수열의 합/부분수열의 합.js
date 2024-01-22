const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let count = 0;

  dfs(0, 0);
  
  if (S === 0) count--;

  console.log(count);

  function dfs(depth, sum) {
    if (depth === N) {
      if (sum === S) count++;
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum);
  }
};

solution();
