class MaxHeap {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.array.pop();

    const max = this.array[0];
    this.array[0] = this.array.pop();
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.array.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.array[parentIndex] < this.array[currentIndex]) {
        [this.array[parentIndex], this.array[currentIndex]] = [this.array[currentIndex], this.array[parentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    const length = this.array.length;

    while (true) {
      let largest = currentIndex;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;

      if (leftChildIndex < length && this.array[leftChildIndex] > this.array[largest]) {
        largest = leftChildIndex;
      }

      if (rightChildIndex < length && this.array[rightChildIndex] > this.array[largest]) {
        largest = rightChildIndex;
      }

      if (largest !== currentIndex) {
        [this.array[largest], this.array[currentIndex]] = [this.array[currentIndex], this.array[largest]];
        currentIndex = largest;
      } else {
        break;
      }
    }
  }

  size() {
    return this.array.length;
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

const solution = (n, works) => {
  const maxHeap = new MaxHeap();

  for (const work of works) {
    maxHeap.push(work);
  }

  while (n > 0 && !maxHeap.isEmpty()) {
    const maxWork = maxHeap.pop();
    if (maxWork > 0) {
      maxHeap.push(maxWork - 1);
      n--;
    }
  }

  return maxHeap.array.reduce((acc, cur) => acc + cur * cur, 0);
};
