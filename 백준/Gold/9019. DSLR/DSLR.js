const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
    .toString().trim().split("\n");

const solution = () => {
  const D = n => (2 * n) % 10000;
  const S = n => n === 0 ? 9999 : n - 1;
  const L = n => (n % 1000) * 10 + Math.floor(n / 1000);
  const R = n => Math.floor(n / 10) + (n % 10) * 1000;

  const T = +input[0];

  for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    console.log(bfs(A, B));
  }

  function bfs(A, B) {
    const visited = Array(10000).fill(false);
    const queue = [[A, ""]];
    visited[A] = true;

    while (queue.length > 0) {
      const [current, path] = queue.shift();
      if (current === B) return path;

      const operations = [D(current), S(current), L(current), R(current)];
      const commands = ['D', 'S', 'L', 'R'];

      for (let i = 0; i < 4; i++) {
        const next = operations[i];
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, path + commands[i]]);
        }
      }
    }
  };


}

solution();


