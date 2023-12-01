const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);

  const students = input.slice(1);

  const map = new Map()

  students.forEach((s,index) => map.set(s, index));

  console.log(Array.from(map).sort((a, b) => a[1] - b[1]).slice(0, N).map(v => v[0]).join("\n"));
};

solution();
