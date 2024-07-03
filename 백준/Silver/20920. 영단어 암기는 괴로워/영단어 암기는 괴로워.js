const input = require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input.slice(1).filter(v => v.length >= M);
  const map = arr.reduce((acc, cur) => {
    acc.set(cur, acc.has(cur) ? acc.get(cur) + 1 : 1);
    return acc;
  }, new Map())

  const arrayFromMap = Array.from(map);
  arrayFromMap.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0].length === b[0].length) {
        return a[0] < b[0] ? -1 : 1;
      }
      return a[0].length > b[0].length ? -1 : 1;
    }
    return a[1] > b[1] ? -1 : 1;
  })

  console.log(arrayFromMap.map(v => v[0]).join('\n'));
};

solution();
