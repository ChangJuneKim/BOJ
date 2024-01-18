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
  const [N, D] = input[0].split(' ').map(Number);
  const shortcuts = [];

  for (let i = 1; i <= N; i++) {
    const [start, end, length] = input[i].split(' ').map(Number);
    if (end <= D) {
      shortcuts.push({ start, end, length });
    }
  }
  

  // 다익스트라 알고리즘
  const pq = new PriorityQueue();
  pq.enqueue(0, 0);
  const dist = Array(D + 1).fill(Infinity);
  dist[0] = 0;

  while (pq.size() > 0) {
    const { v: current, w } = pq.dequeue();

    if (w > dist[current]) continue;

    // 기본 고속도로를 따라 다음 지점까지 이동
    if (current < D && w + 1 < dist[current + 1]) {
      dist[current + 1] = w + 1;
      pq.enqueue(current + 1, dist[current + 1]);
    }

    // 지름길을 사용할 경우
    for (const { start, end, length } of shortcuts) {
      if (start === current && w + length < dist[end]) {
        dist[end] = w + length;
        pq.enqueue(end, dist[end]);
      }
    }
  }

  console.log(dist[D]);
};

solution();