const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const input = fs.readFileSync(0).toString().trim().split('\n');
class UnionFind {
  constructor(count) {
    this.count = count;
    this.parent = new Array(count).fill(-1);
  }

  find(num) {
    if (this.parent[num] < 0) return num;
    return this.parent[num] = this.find(this.parent[num]);
  }

  merge(num1, num2) {
    const rootA = this.find(num1);
    const rootB = this.find(num2);
    if (rootA === rootB) return;

    const temp = this.parent[rootA] + this.parent[rootB];
    if (this.parent[rootA] > this.parent[rootB]) {
      this.parent[rootA] = rootB;
      this.parent[rootB] = temp;
    } else {
      this.parent[rootB] = rootA;
      this.parent[rootA] = temp;
    }
  }
}

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const uf = new UnionFind(N + 1);
  const output = [];

  for (let i = 1; i <= M; i++) {
    const [command, a, b] = input[i].split(' ').map(Number);
    if (command === 0) {
      uf.merge(a, b);
    } else if (command === 1) {
      output.push(uf.find(a) === uf.find(b) ? "YES" : "NO");
    }
  }

  console.log(output.join('\n'));
}

solution(input);
