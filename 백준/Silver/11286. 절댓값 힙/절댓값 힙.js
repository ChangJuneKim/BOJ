const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

class PQ{
  constructor() {
    this.values = [];
  }

  swap(a, b){
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
  }

  bubbleUp(){
    let index = this.values.length - 1;
    let el = this.values[index];

    while (index > 0) {
      let pi = Math.floor((index - 1) / 2);
      let p = this.values[pi];

      // 절댓값이 부모보다 크거나 같으면 종료
      if (el.absValue > p.absValue) break;

      // 절댓값이 같지만 원래 값이 더 크거나 같으면 종료
      if (el.absValue === p.absValue && el.value >= p.value) break;

      this.swap(index, pi);
      index = pi;
    }
  }

  enqueue(v){
    this.values.push({ value: v, absValue: Math.abs(v) });
    this.bubbleUp();
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    let el = this.values[index];

    while(true){
      let lI = index * 2 + 1;
      let rI = index * 2 + 2;

      let left, right;
      let swapIndex = null;

      if (lI < length) {
        left = this.values[lI];
        // 절댓값이 같은 경우 원래 값이 더 작은지 확인
        if (left.absValue < el.absValue ||
          (left.absValue === el.absValue && left.value < el.value)) {
          swapIndex = lI;
        }
      }

      if (rI < length) {
        right = this.values[rI];
        if (
          (swapIndex === null && right.absValue < el.absValue) ||
          (swapIndex === null && right.absValue === el.absValue && right.value < el.value) ||
          (swapIndex !== null && right.absValue < left.absValue) ||
          (swapIndex !== null && right.absValue === left.absValue && right.value < left.value)
        ) {
          swapIndex = rI;
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

    return head?.value;
  }
}

const solution = () => {
  const N = +input[0];

  const ops = input.slice(1).map(Number);
  const pq = new PQ();
  const result = [];

  for(const op of ops){
    if(op === 0) result.push(pq.dequeue() ?? 0);
    else pq.enqueue(op);
  }

  console.log(result.join("\n"));
};

solution();



