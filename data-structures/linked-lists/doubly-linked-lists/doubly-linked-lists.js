class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    // 빈 상태라면
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  shift() {
    const shiftedNode = this.head;

    if (this.length === 0) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length -= 1;

    return shiftedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const half = Math.floor(this.length / 2);

    let count;
    let current;

    if (index <= half) {
      // 인덱스가 길이의 반보다 작으면 head 부터 찾고
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      // 길면 tail부터 찾는다
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length -= 1;

    return removedNode;
  }

  reverse() {
    let current = this.head;
    // 머리 꼬리 바꾸고
    [this.head, this.tail] = [this.tail, this.head];

    // 길이 만큼 prev와 next를 스왑 -> 노드 변경 반복
    for (let i = 0; i < this.length; i++) {
      const { prev, next } = current;

      current.prev = next;
      current.next = prev;
      current = next;
    }

    return this;
  }
}
