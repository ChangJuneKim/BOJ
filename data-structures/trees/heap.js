// 힙이란? 완전 이진 트리의 일종, 우선순위 큐를 위해 만들어진 자료구조
// 여러 개 값들 중에 최댓값이나 최솟값을 빠르게 찾아낼 수 있음
// 반정렬 상태를 유지한다(완전히 정렬되어 있진 않지만, 부모가 자식보다는 항상 크다)
// 힙트리에서는 중복된 값을 허용한다. (이진탐색 트리에서는 중복값을 허용하지 않는다. binary-search-tree.js 파일에서 구현할 때 에러가 나게 만들었었음)

// 최대힙, 최소힙 그냥 간단하게 최대힙은 부모가 자식보다 크거나 같은 완전 이진 트리, 최소힙은 부모가 자식보다 작거나 같은 완전 이진 트리

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 55];
  }

  bubbleUp() {
    let index = this.values.length - 1;

    const element = this.values[index]; // insert에서 push된 values의 마지막 요소
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }
}

const heap = new MaxBinaryHeap();

heap.insert(12);

console.log(heap.values);

// [41, 39, 33, 18, 27, 12, 55]
//  0   1   2   3   4   5   6
