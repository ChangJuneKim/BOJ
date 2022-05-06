class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// 중요도의 숫자가 낮을수록 중요하다 (min heap)
class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  bubbleUp() {
    let currentIndex = this.nodes.length - 1;

    if (currentIndex < 1) return;

    const currentElement = this.nodes[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentElement = this.nodes[parentIndex];

      // heap과 똑같은데 priority(중요도)를 비교한다
      // 최소힙은 부등호 방향만 바꿔주면 됨 (trees/heap.js 는 최대힙이다)
      if (parentElement.priority <= currentElement.priority) break;

      this.nodes[parentIndex] = currentElement;
      this.nodes[currentIndex] = parentElement;
      currentIndex = parentIndex;
    }
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.nodes.push(newNode);

    this.bubbleUp();
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    const leftChildElement = this.nodes[leftChildIndex];
    const rightChildElement = this.nodes[rightChildIndex];

    const length = this.nodes.length;

    let smallest = index;

    if (leftChildIndex <= length && leftChildElement?.priority < this.nodes[smallest].priority) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex <= length && rightChildElement?.priority < this.nodes[smallest].priority) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.nodes[smallest], this.nodes[index]] = [this.nodes[index], this.nodes[smallest]];
      this.trickleDown(smallest);
    }
  }

  dequeue() {
    const min = this.nodes[0];
    const endOfHeap = this.nodes.pop();

    if (this.nodes.length > 0) {
      this.nodes[0] = endOfHeap;
      this.trickleDown();
    }

    return min;
  }
}

const ER = new PriorityQueue();

ER.enqueue('총상', 1);
ER.enqueue('수술', 2);
ER.enqueue('감기', 4);
ER.enqueue('타박상', 4);
ER.enqueue('코로나', 3);

ER.dequeue();

console.log(ER);
