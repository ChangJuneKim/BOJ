const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.p <= parent.p) break;

      // 요소 교환
      [this.values[parentIndex], this.values[index]] = [element, parent];
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (index < length) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.p > element.p) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if ((swapIndex === null && rightChild.p > element.p) || (swapIndex !== null && rightChild.p > leftChild.p)) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      [this.values[index], this.values[swapIndex]] = [this.values[swapIndex], element];
      index = swapIndex;

    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  enqueue(v, p) {
    const newNode = {v, p};
    this.values.push(newNode);
    this.bubbleUp();
  }

}


const solution = () => {
  let inputIndex = 0;
  const answer = [];
  const N = +input[inputIndex++]

  const pq = new PriorityQueue();
  for(let i = 0; i < N; i++){
    const x = +input[inputIndex++];
    if(x === 0){
      const result = pq.dequeue();

      answer.push(result?.p ?? 0);
    } else {
      pq.enqueue(x, x);
    }
  }

  console.log(answer.join("\n"));
};

solution();



