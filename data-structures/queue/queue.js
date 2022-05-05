// 큐는 스택과 비슷하지만 First In First Out 이다

// 1. 배열을 이용하는 방법
// unshift, pop 을 조합하거나 push, shift 를 조합해서 만들 수 있다.

// 2. 단방향 연결 리스트를 이용하는 방법
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//         dequeue()  front(head) 출력 <--  [ QUEUE 큐 ]  <--  입력 rear(tail)  enqueue(item)
// 제거는 head(front)에서 하고 추가는 tail(rear) 에서 할 것
// 연결리스트는 head나 tail에 추가는 둘다 O(1)인데
// 삭제는 tail에서 일어나려면 O(N) 이기때문
class Queue {
  constructor() {
    this.front = null; // 나오는 곳
    this.rear = null; // 들어가는 곳
    this.size = 0;
  }

  // 리스트의 push 기능 (뒤에 추가)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;

    this.size += 1;

    return this.size;
  }

  // 리스트의 shift 기능(앞에서 제거)
  dequeue() {
    if (this.isEmpty()) return null;

    const temp = this.front;

    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size -= 1;

    return temp.value;
  }

  peekFront() {
    if (this.isEmpty()) return null;
    return this.front.value;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write('(FRONT) ');
    while (curr != this.rear) {
      process.stdout.write(`${curr.value} <-- `);
      curr = curr.next;
    }
    process.stdout.write(`${this.rear.value} (REAR)\n`);
  }
}

const q = new Queue();

q.enqueue('asd1');
q.enqueue('asd2');
q.enqueue('asd3');
console.log(q.peekFront());

q.dequeue();

console.log(q.peekFront());

q.display();
