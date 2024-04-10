const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const V = +input[0];
const tree = Array.from(Array(V + 1), () => []);

const solution = () => {
  for (let i = 1; i <= V; i++) {
    const nodeInfo = input[i].split(' ').map(Number);
    const node = nodeInfo[0];
    for (let j = 1; j < nodeInfo.length - 1; j += 2) {
      const [to, dist] = [nodeInfo[j], nodeInfo[j + 1]];
      tree[node].push({ to, dist });
    }
  }

  const { maxNode: firstNode } = dfs(1); // 임의의 노드(1)로부터 가장 먼 노드 찾기
  const { maxDist: diameter } = dfs(firstNode); // 첫 번째로 찾은 노드로부터 가장 먼 노드(트리의 지름) 찾기

  console.log(diameter); // 트리의 지름 출력

  function dfs(start) {
    const visited = new Array(V + 1).fill(false);
    let maxDist = 0;
    let maxNode = 0;

    function recursive(node, dist) {
      visited[node] = true;
      if (dist > maxDist) {
        maxDist = dist;
        maxNode = node;
      }

      tree[node].forEach(({ to, dist: nextDist }) => {
        if (!visited[to]) {
          recursive(to, dist + nextDist);
        }
      });
    }

    recursive(start, 0);
    return { maxNode, maxDist };
  }
};

solution();
