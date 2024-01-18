const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

class PriorityQueue{
  constructor() {
    this.values = [];
  }

  swap(a, b){
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]]
  }

  sinkDown(){
    let index = 0;
    let el = this.values[index];
    const length = this.size();

    while(true){
      let li = index * 2 + 1;
      let ri = index * 2 + 2;
      let left, right;
      let swapIndex = null;

      if(li < length){
        left = this.values[li];
        if(left.w < el.w){
          swapIndex = li;
        }
      }

      if(ri <length){
        right = this.values[ri];
        if((swapIndex === null && right.w < el.w) ||
          (swapIndex !== null && right.w < left.w)){
          swapIndex = ri;
        }
      }

      if(swapIndex === null) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }

  dequeue(){
    let head = this.values[0];
    let popped = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = popped;
      this.sinkDown();
    }

    return head;
  }

  bubbleUp(){
    let index = this.values.length - 1;
    let el = this.values[index];

    while (index > 0) {
      let pi = Math.floor((index - 1) / 2);
      let p = this.values[pi];

      if(el.w > p.w) break;

      this.swap(index, pi);
      index = pi;
    }
  }

  enqueue(v, w){
    this.values.push({v, w});
    this.bubbleUp();
  }

  size(){
    return this.values.length;
  }
}


const solution = () => {
  const [N, M, K, X] = input[0].split(' ').map(Number);
  const graph = makeGraph();

  const distances = dijkstra(X);

  const result = [];

  for (let i = 1; i < distances.length; i++) {
    if (distances[i] === K) {
      result.push(i);
    }
  }

  if (result.length === 0) {
    console.log(-1);
  } else {
    console.log(result.join("\n"));
  }

  function dijkstra(start){
    const pq = new PriorityQueue();
    const distances = Array(N + 1).fill(Infinity);

    pq.enqueue(start, 0);
    distances[start] = 0;

    while (pq.size() > 0) {
      const {v: current, w} = pq.dequeue();

      if(w > distances[current]) continue;

      graph[current].forEach(neighbor => {
        const total = neighbor.w + w;

        if(total < distances[neighbor.v]){
          distances[neighbor.v] = total;
          pq.enqueue(neighbor.v, total);
        }
      })
    }

    return distances;
  }

  function makeGraph(){
    const graph = {};
    for (let i = 1; i <= N; i++) {
      graph[i] = [];
    }

    for (let i = 1; i <= M; i++) {
      const [A, B] = input[i].split(" ").map(Number);
      graph[A].push({v: B, w: 1});
    }

    return graph;
  }

};

solution();