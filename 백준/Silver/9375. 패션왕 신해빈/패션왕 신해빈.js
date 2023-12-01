const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  let inputIndex = 1;
  const T = +input[0];

  for (let i = 0; i < T; i++) {
    const N = +input[inputIndex++];
    const clothes = new Map();

    for (let j = 0; j < N; j++) {
      const [, category] = input[inputIndex++].split(" ");
      clothes.set(category, (clothes.get(category) || 0) + 1);
    }

    let combinations = 1;
    for (const count of clothes.values()) {
      combinations *= (count + 1);
    }

    console.log(combinations - 1);
  }
};

solution();
