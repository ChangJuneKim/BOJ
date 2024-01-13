const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M, X] = input[0].split(' ').map(Number);
  const graph = Array.from(Array(N + 1), () => []);
  const reverseGraph = Array.from(Array(N + 1), () => []);

  for (let i = 1; i <= M; i++) {
    const [start, end, time] = input[i].split(' ').map(Number);
    graph[start].push({to: end, time});
    reverseGraph[end].push({to: start, time});
  }

  function dijkstra(graph, start) {
    const distances = Array(N + 1).fill(Infinity);
    const queue = [{to: start, time: 0}];
    distances[start] = 0;

    while (queue.length > 0) {
      const {to, time} = queue.shift();

      if (distances[to] < time) continue;

      graph[to].forEach(next => {
        if (distances[next.to] > time + next.time) {
          distances[next.to] = time + next.time;
          queue.push({to: next.to, time: distances[next.to]});
        }
      });
    }

    return distances;
  }

  const distancesToX = dijkstra(graph, X);
  const distancesFromX = dijkstra(reverseGraph, X);

  let maxTime = 0;
  for (let i = 1; i <= N; i++) {
    maxTime = Math.max(maxTime, distancesToX[i] + distancesFromX[i]);
  }

  console.log(maxTime);
};

solution();
