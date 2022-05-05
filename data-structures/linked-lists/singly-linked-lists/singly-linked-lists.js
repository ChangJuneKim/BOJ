//    List                                        vs                    Array

// 리스트는 index가 없다.                                   index로 이루어진 순서가 있다.
// 각 노드는 "next" 포인터를 통해 연결되어 있다.               삽입과 삭제가 고비용이다.
// 랜덤한 접근이 허용되지 않는다.                             index를 이용해서 특정한 index를 빨리 접근할 수 있다.

// 데이터 조각 - value
// 호출될 다음 노드들에 대한 참조 정보 - next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 처음엔 노드 하나짜리라 next가 없음
  }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      //head값이 없다면
      this.head = newNode; //newNode 는 head이자
      this.tail = this.head; //tail 이다
    } else {
      this.tail.next = newNode; // 현재 tail의 next에 새로들어온 값을 주고
      this.tail = newNode; // tail은 새로 들어온 값이 된다
    }
    this.length += 1;
    return this;
  }

  // 단일 연결 리스트라 앞에서부터 찾아야한다
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;

    this.head = currentHead.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count += 1;
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }

  // 역순
  //      tail                                head
  //      [1,       2,       3,       4,       5]
  //prev curNode nextNode
  //       prev curNode nextNode
  //                prev curNode nextNode
  //                        prev curNode nextNode
  //                                  prev curNode nextNode
  // 2의 next는 1이 되고
  // 1의 next는 null이 되고
  // prev cur next는 오른쪽으로 한칸씩 옮겨진다
  // 그 다음 루프에서 nextNode는 current의 next라 3
  reverse() {
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    let prevNode = null;
    let nextNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }

    return this;
  }

  // 아래는 그냥 임의로 만듦
  // // 리스트 모두 출력
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // 리스트 보기쉽게 배열로 출력해보기
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push('1');
list.push('2');
list.push('3');

list.reverse();

list.print();
console.log(list);
