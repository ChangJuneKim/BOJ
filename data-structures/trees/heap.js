// 힙이란? 완전 이진 트리의 일종, 우선순위 큐를 위해 만들어진 자료구조
// 여러 개 값들 중에 최댓값이나 최솟값을 빠르게 찾아낼 수 있음
// 반정렬 상태를 유지한다(완전히 정렬되어 있진 않지만, 부모가 자식보다는 항상 크다)
// 힙트리에서는 중복된 값을 허용한다. (이진탐색 트리에서는 중복값을 허용하지 않는다. binary-search-tree.js 파일에서 구현할 때 에러가 나게 만들었었음)

// 최대힙, 최소힙 그냥 간단하게 최대힙은 부모가 자식보다 크거나 같은 완전 이진 트리, 최소힙은 부모가 자식보다 작거나 같은 완전 이진 트리

// 왜 Node 클래스를 사용하지 않는가?
// HEAP은 완전 이진 트리를 기본으로 한 자료구조이다. 완전 이진 트리는 노드를 왼쪽부터 차곡차곡 채워나가기 때문에
// 트리가 기울어 질 일이 없다. 그래서 원소에 바로 접근이 가능한 배열의 장점을 살려서 구현하는 경우가 많다
class MaxBinaryHeap {
  constructor() {
    this.nodes = [55, 39, 41, 18, 27, 12, 33];
  }

  // 현재 삽입한 노드가 루트까지 올라가거나, 부모보다 작은 값을 가지게 되거나, 둘 중 하나를 만족할때 까지 반복
  bubbleUp() {
    let currentIndex = this.nodes.length - 1;

    if (currentIndex < 1) return;

    const currentElement = this.nodes[currentIndex]; // insert에서 push된 nodes의 마지막 요소

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentElement = this.nodes[parentIndex];

      // 부모가 더 크거나 작으면
      if (parentElement >= currentElement) break;

      this.nodes[parentIndex] = currentElement;
      this.nodes[currentIndex] = parentElement;
      currentIndex = parentIndex;
    }
  }

  insert(value) {
    this.nodes.push(value);

    // bubble Up 이란?
    // 최대힙은 항상 부모가 자식보다 큰 값을 가져야하므로,
    // 삽입한 노드의 크기가 부모보다 큰 값이라면 두 노드의 위치를 바꿔야함
    this.bubbleUp();
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    const leftChildElement = this.nodes[leftChildIndex];
    const rightChildElement = this.nodes[rightChildIndex];

    const length = this.nodes.length;

    let largest = index;

    if (leftChildIndex <= length && leftChildElement > this.nodes[largest]) {
      largest = leftChildIndex;
    }
    if (rightChildIndex <= length && rightChildElement > this.nodes[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      [this.nodes[largest], this.nodes[index]] = [this.nodes[index], this.nodes[largest]];
      this.trickleDown(largest);
    }
  }

  extractMax() {
    const max = this.nodes[0];
    const endOfHeap = this.nodes.pop();

    if (this.nodes.length > 0) {
      this.nodes[0] = endOfHeap;
      this.trickleDown();
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log(heap);
// [41, 39, 33, 18, 27, 12, 55]
//  0   1   2   3   4   5   6
