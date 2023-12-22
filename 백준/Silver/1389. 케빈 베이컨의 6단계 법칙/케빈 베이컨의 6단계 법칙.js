const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = makeGraph();
  let minKevinBacon = Number.MAX_SAFE_INTEGER;
  let minKevinBaconUser = 0;


  for (let i = 1; i <= N; i++) {
    const baconCount = bfs(i);
    if (baconCount < minKevinBacon) {
      minKevinBacon = baconCount;
      minKevinBaconUser = i;
    }
  }

  console.log(minKevinBaconUser);

  function bfs(start) {
    const visited = Array(N + 1).fill(false);
    const queue = [[start, 0]];
    let totalBacon = 0;

    visited[start] = true;

    let head = 0;
    while (queue.length > head) {
      const [node, dist] = queue[head++];

      totalBacon += dist;

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          queue.push([neighbor, dist + 1]);
          visited[neighbor] = true;
        }
      }
    }
    return totalBacon;
  }

  function makeGraph() {
    const graph = Array.from({length: N + 1}, () => []);
    for (let i = 1; i <= M; i++) {
      const [start, end] = input[i].split(" ").map(Number);

      graph[start].push(end);
      graph[end].push(start);
    }

    return [...graph];
  }
};

solution();
