const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  solution();
  process.exit();
});

class Priority_Queue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  empty() {
    return this.heap.length === 0;
  }

  top() {
    return this.heap[0];
  }

  push(item) {
    this.heap.push(item);

    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    const currentItem = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentItem = this.heap[parentIndex];

      if (this.compare(parentItem, currentItem)) break;

      // Shift Up
      this.heap[currentIndex] = parentItem;
      currentIndex = parentIndex;
    }

    this.heap[currentIndex] = currentItem;
  }

  pop() {
    const last = this.heap.length - 1;
    this.heap[0] = this.heap[last];
    this.heap.pop();

    if (this.heap.length > 0) {
      this.heapifyDown();
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    const currentItem = this.heap[currentIndex];

    while (currentIndex < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;

      // 자식이 없을 경우
      if (leftChildIndex >= this.heap.length) break;

      const leftChildItem = this.heap[leftChildIndex];
      const rightChildItem =
        rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

      const bestIndex =
        rightChildItem !== null && this.compare(rightChildItem, leftChildItem)
          ? rightChildIndex
          : leftChildIndex;
      const bestItem = this.heap[bestIndex];

      if (this.compare(currentItem, bestItem)) break;

      // Down
      this.heap[currentIndex] = bestItem;
      currentIndex = bestIndex;
    }

    this.heap[currentIndex] = currentItem;
  }
}

function solution() {
  let cursor = 0;
  const t = +input[cursor++];

  const log = [];
  for (let i = 0; i < t; i++) {
    const k = +input[cursor++];
    const maxHeap = new Priority_Queue((a, b) => a > b);
    const minHeap = new Priority_Queue((a, b) => a < b);
    const valid = {};

    for (let j = 0; j < k; j++) {
      const [op, num] = input[cursor++].split(" ");

      if (op === "I") {
        // 양쪽 heap에 넣어줌
        minHeap.push(+num);
        maxHeap.push(+num);

        if (valid[+num]) {
          valid[+num]++;
        } else {
          valid[+num] = 1;
        }
      } else if (+num === 1) {
        // 최댓값 제거
        while (!maxHeap.empty()) {
          const item = maxHeap.top();
          maxHeap.pop();

          // vaild 하다면 진짜 최댓값
          if (valid[item] > 0) {
            valid[item]--;
            break;
          }
        }
      } else if (+num === -1) {
        // 최솟값 제거
        while (!minHeap.empty()) {
          const item = minHeap.top();
          minHeap.pop();

          // vaild 하다면 진짜 최솟값
          if (valid[item] > 0) {
            valid[item]--;
            break;
          }
        }
      }
    }
    while (!maxHeap.empty() && valid[maxHeap.top()] === 0) {
      maxHeap.pop();
    }
    while (!minHeap.empty() && valid[minHeap.top()] === 0) {
      minHeap.pop();
    }

    if (minHeap.empty() && maxHeap.empty()) {
      log.push("EMPTY");
    } else {
      log.push(`${maxHeap.top()} ${minHeap.top()}`);
    }
  }

  console.log(log.join("\n"));
}