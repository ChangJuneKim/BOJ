const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);
  const K = +input[1]
  const graph = Array.from({length : N + 1}, () => []);

  for(let i = 2; i < M + 2; i++){
    const [start, to, weight] = input[i].split(" ").map(Number);
    graph[start].push({to, weight});
  }

  dijkstra(graph, K);


  function findMinIndex(distances, visited) {
    let min = Infinity;
    let minIndex = -1;

    for(let i = 1; i <= distances.length; i++){
      if(!visited[i] && distances[i] < min){
        min = distances[i];
        minIndex = i;
      }
    }
    return minIndex;
  }

  function dijkstra(graph, start){
   const distances = Array(graph.length).fill(Infinity)
   const visited = Array(graph.length).fill(false)
   distances[start] = 0;

   for(let i = 1; i <= graph.length; i++){
     const minIndex = findMinIndex(distances, visited);
     if (minIndex === -1) break;
     visited[minIndex] = true;

     for (const neighbor of graph[minIndex]) {
       const newDistance = distances[minIndex] + neighbor.weight;
       if (newDistance < distances[neighbor.to]) {
         distances[neighbor.to] = newDistance;
       }
     }
   }

    console.log(distances.slice(1).map(v => v === Infinity ? 'INF' : v).join("\n"));
 }

};

solution();