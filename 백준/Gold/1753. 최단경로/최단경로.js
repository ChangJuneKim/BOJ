const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(a, b) {
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let el = this.values[index];

    while (index > 0) {
      let pi = Math.floor((index - 1) / 2);
      let p = this.values[pi];

      if (el.w >= p.w) break;

      this.swap(index, pi);
      index = pi;
    }
  }

  eq(v, w) {
    const newNode = {v, w};
    this.values.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let el = this.values[index];

    while (true) {
      let lI = index * 2 + 1;
      let rI = index * 2 + 2;
      let left, right;
      let swapIndex = null;

      if (lI < length) {
        left = this.values[lI];
        if (left.w < el.w) {
          swapIndex = lI;
        }
      }

      if (rI < length) {
        right = this.values[rI];
        if ((swapIndex === null && right.w < el.w) ||
          (swapIndex !== null && right.w < left.w)) {
          swapIndex = rI;
        }
      }

      if (swapIndex === null) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }

  dq() {
    let head = this.values[0];
    let popped = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = popped;
      this.sinkDown();
    }

    return head;
  }

  size() {
    return this.values.length;
  }

}


const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);
  const K = +input[1];
  const graph = {};

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  for (let i = 2; i < M + 2; i++) {
    const [start, to, weight] = input[i].split(" ").map(Number);
    graph[start].push({to, weight});
  }

  const distances = dijkstra(K)
  const result = [];

  for(let i = 1; i <= N; i++){
    if(distances[i] === Infinity){
      result.push("INF");
    } else {
      result.push(distances[i]);
    }
  }

  console.log(result.join("\n"));


  function dijkstra(start) {
    const pq = new PriorityQueue();
    const distances = Array(N + 1).fill(Infinity);

    pq.eq(start, 0);
    distances[start] = 0;

    while (pq.size() > 0) {
      // 1. 우선순위 큐에서 가장 작은 가중치를 가진 정점을 꺼냅니다.
      const {v: current, w} = pq.dq();

      // 2. 현재 정점까지의 최단 거리가 이미 꺼낸 가중치보다 작다면,
      // 더 짧은 경로가 존재한다는 뜻이므로 이 정점은 무시합니다.
      if (distances[current] < w) continue;

      // 3. 현재 정점의 모든 이웃을 순회합니다.
      graph[current].forEach(neighbor => {
        // 4. 현재 정점을 거쳐 이웃으로 가는 총 가중치를 계산합니다.
        let totalWeight = w + neighbor.weight;

        // 5. 현재 정점을 거쳐 이웃으로 가는 거리가 현재 알려진 이웃까지의 거리보다 작다면,
        //    이 거리를 업데이트하고 우선순위 큐에 넣습니다.
        if (totalWeight < distances[neighbor.to]) {
          distances[neighbor.to] = totalWeight;
          pq.eq(neighbor.to, totalWeight);
        }
      });
    }

    return distances;
  }

};

solution();