const getParent = (x, parent) => (parent[x] === x ? x : (parent[x] = getParent(parent[x], parent)));
const findParent = (a, b, parent) => getParent(a, parent) === getParent(b, parent);
const unionParent = (a, b, parent) => {
  a = parent[a];
  b = parent[b];
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

const solution = (village, parent) => {
  let sum = 0;
  const MST = [];

  // MST를 구성
  village.forEach(({ to: a, from: b, cost: c }) => {
    if (!findParent(a, b, parent)) {
      unionParent(a, b, parent);
      MST.push({ from: a, to: b, cost: c });
    }
  });

  // 가장 큰 비용의 간선을 제거
  MST.pop();

  sum = MST.reduce((acc, { cost }) => acc + cost, 0);

  return sum;
};

const main = () => {
  let answer = 0;
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  const [N, M] = input[0].split(' ').map(Number);
  const road = input.slice(1).map(_ => _.trim().split(' ').map(Number));

  const village = road.map(([A, B, C]) => ({ from: A, to: B, cost: C }));
  
  village.sort((a, b) => a.cost - b.cost);

  const parent = new Array(N + 1).fill(0).map((_, i) => i);

  answer = solution(village, parent);

  return console.log(answer);
};

main();