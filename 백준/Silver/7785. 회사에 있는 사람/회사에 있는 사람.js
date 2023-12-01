const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const n = +input[0];
  const logs = new Map(input.slice(1).map(v => v.split(" ")));
  const result = [];

  for (const key of logs.keys()) {
    if (logs.get(key) === 'enter') result.push(key);
  }

  result.sort().reverse();
  // result.sort((a, b) => a.localeCompare(b, 'en', {sensitivity: "base"}));
  console.log(result.join("\n"));
};

solution();
