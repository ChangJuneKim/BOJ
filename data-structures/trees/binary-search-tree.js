// 이진탐색트리는 이진트리 중에서도
// 부모의 좌측 자식 노드는 부모보다 작고
// 부모의 우측 자식 노드는 부모보다 큰 이진트리를 말한다.
// 순서가 있는 정렬 데이터를 가지고 탐색작업을 한다.
//  Q)70을 찾으시오.
// 1. 70은 41보다 큰가? 크다면 우측 절반만 보면 된다.
// 2. 70은 60보다 큰가? 크니 우측으로
// 3. 70은 91보다 큰가? 작으니 좌측으로
// 4. 70 서칭 완료
//              예시
//                  [41]
//          20              [60]
//     11       29       50       [91]
//       12       31           [70]     100

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (newNode.value === current.value) {
        console.log('중복된 값이 입력되었습니다.');
        return undefined;
      }

      // 들어온 값이 더 작으면 좌측
      if (newNode.value < current.value) {
        // 현재 값 left가 없으면 거기가 자리
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          // left가 있으면 기준(current)을 좌측 아래 자식으로 변경)
          current = current.left;
        }
      }
      // 크면 우측
      else if (newNode.value > current.value) {
        // 현재 값 right가 없으면 거기가 자리
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          // right가 있으면 기준(current)을 우측 아래 자식으로 변경)
          current = current.right;
        }
      }
    }
  }

  // value인 노드를 찾아서 리턴
  find(value) {
    // 트리가 비었을 때
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      // 들어온 값이 작으면 좌측
      if (value < current.value) {
        current = current.left;
        // 크면 우측
      } else if (value > current.value) {
        current = current.right;
        // 찾으면(값이 같으면)
      } else {
        found = true;
        console.log(`찾았다 ${current.value}`);
        return current;
      }
    }
  }

  // value인 노드의 유무를 boolean으로 리턴
  contains(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        return true;
      }
    }
    return false;
  }

  remove(value) {
    // 트리가 비었을 때
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      // 들어온 값이 작으면 좌측
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        // 크면 우측
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // 삭제할 값을 찾았을 때!

        // 옵션 1: 삭제할 값의 우측 child 노드가 없을 때
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // 부모가 현재 값보다 크다면, 현재 왼쪽 child 노드를 부모의 왼쪽 child로 만듬
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //작다면,왼쪽 child를 부모의 오른쪽 child로 만듬
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //옵션 2: 삭제할 값의 우측 child 노드는 있지만 걔의 좌측 child 노드가 없을 때
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            // 부모가 현재 값보다 크다면, 현재 오른쪽 child 노드를 부모의 왼쪽 child로 만듬
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //작다면, 오른쪽 child를 부모의 오른쪽 child로 만듬
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //옵션 3: 삭제할 값의 우측 child 노드도 있고 걔의 좌측 child 노드도 있을 때
        } else {
          // 우측 child 노드의 가장 왼쪽 자식 찾기
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //부모의 왼쪽 하위 트리는 leftmost의 오른쪽 하위 트리
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.root = new Node(10);
tree.insert(4);
tree.insert(2);
tree.insert(3);
tree.insert(11);
tree.remove(10);
tree.find(3);
tree.find(4);
tree.find(10);

console.log(tree.root);
