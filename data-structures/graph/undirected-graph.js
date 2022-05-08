// 양방향 그래프
class UndirectedGraph {
  constructor() {
    // 인접리스트
    this.adjacencyList = {};
  }

  // 노드 추가
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  // 노드 두개 연결
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(linkedNode => linkedNode !== node2);
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(linkedNode => linkedNode !== node1);
  }

  removeNode(node) {
    while (this.adjacencyList[node].length) {
      const adjacentNode = this.adjacencyList[node].pop();
      this.removeEdge(node, adjacentNode);
    }

    delete this.adjacencyList[node];
  }

  // DFSRecursive(startNode) {
  //   const result = [];
  //   const visited = {};
  //   const adjacencyList = this.adjacencyList;

  //   const dfs = node => {
  //     if (!node) {
  //       return null;
  //     }

  //     visited[node] = true;
  //     result.push(node);

  //     adjacencyList[node].forEach(neighbor => {
  //       if (!visited[neighbor]) {
  //         return dfs(neighbor);
  //       }
  //     });
  //   };

  //   dfs(startNode);

  //   return result;
  // }

  DFSIterative(startNode) {
    const stack = [startNode];
    const result = [];
    const visited = {};
    let currentNode;

    visited[startNode] = true;

    while (stack.length) {
      // console.log(stack);
      currentNode = stack.pop();
      result.push(currentNode);

      this.adjacencyList[currentNode].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BFS(startNode) {
    const queue = [startNode];
    const result = [];
    const visited = {};
    let currentNode;

    visited[startNode] = true;

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode);

      this.adjacencyList[currentNode].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      // 좌->우  서울 대전 대구 부산 울산 광주

      // this.adjacencyList[currentNode]
      //   .slice() // 얕은복사
      //   .reverse() // 뒤집기
      //   .forEach(neighbor => {
      //     if (!visited[neighbor]) {
      //       visited[neighbor] = true;
      //       queue.push(neighbor);
      //     }
      //   });
      // 우->좌  서울 개두 개전 울산 부산 광주
    }
    return result;
  }
}

//            서울
//          /    \
//        대전    대구
//         |      |
//       부산----울산
//         \    /
//          광주

const graph = new UndirectedGraph();

graph.addNode('서울');
graph.addNode('대전');
graph.addNode('대구');
graph.addNode('부산');
graph.addNode('울산');
graph.addNode('광주');

graph.addEdge('서울', '대전');
graph.addEdge('서울', '대구');
graph.addEdge('대전', '부산');
graph.addEdge('대구', '울산');
graph.addEdge('부산', '울산');
graph.addEdge('부산', '광주');
graph.addEdge('울산', '광주');

// console.log(graph.DFSRecursive('서울'));
console.log(graph.DFSIterative('서울'));
console.log(graph.BFS('서울'));
