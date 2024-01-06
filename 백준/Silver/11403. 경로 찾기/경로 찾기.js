const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = parseInt(input[0], 10);
  const graph = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
  const result = Array.from({ length: N }, () => Array(N).fill(0));

  const bfs = (start) => {
    const visited = Array(N).fill(false);
    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();

      for (let next = 0; next < N; next++) {
        if (graph[node][next] && !visited[next]) {
          visited[next] = true;
          queue.push(next);
          result[start][next] = 1;
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    bfs(i);
  }

  result.forEach(row => {
    console.log(row.join(' '));
  });
};

solution();


