// 작업할때 undo / redo 같은 기능이나
// 웹페이지 방문기록 등에 이용된다

// 1. 배열을 이용해서 만드는 방법

const stack = [];

// push pop만 쓰거나
stack.push('google');
stack.push('instagram');
stack.push('youtube');
stack.pop();
// shift, unshift만 사용하면 그게 stack이라고 볼 수 있다.
// 중요한 컨셉은 후입선출(Last In First Out)이다.
// push, pop이 더 효율이 좋으니 push pop으로 사용하자.

// stack의 기능(push, pop)만 사용하기엔 배열은 너무 무거우니(인덱스도 있고, 나머지 안쓰는 메소드들도 많기때문에)
// 효율성을 따진다면 배열이 아닌 단방향 연결 리스트를 활용해서 만든 stack을 이용하자

// 2. 리스트를 이용해서 만드는 방법
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  // 싱글리스트의 shift, unshift가 O(1) 이기 때문에 이름만 push, pop으로 바꿔서 구현해보자

  push(value) {
    if (this.isFull()) {
      console.log('Stack OverFlow!!');
      return;
    }
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size += 1;
    return this.size;
  }

  pop() {
    if (this.isEmpty()) return null;
    const temp = this.top;

    if (this.top === this.bottom) {
      // size가 1이면
      this.top = null;
      this.bottom = null;
    }

    this.top = this.top.next;
    this.size -= 1;
    return temp.value;
  }

  // 가장 위에 있는 값 보여주기
  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  display() {
    if (this.isEmpty()) return null;
    let current = this.top;

    process.stdout.write('(TOP) ');
    while (current.next) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    process.stdout.write(`${current.value} (Bottom)\n`);
  }

  isFull() {
    return this.size >= this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}
