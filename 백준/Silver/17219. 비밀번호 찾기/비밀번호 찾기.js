const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);

  const pocketmons = new Map(input.slice(1, 1 + N).map((pocketmon, index) => [pocketmon.split(" ")[0], pocketmon.split(" ")[1]]));
  const questions = input.slice(1 + N, 1 + N + M);
  
  const result = [];

  for(const q of questions) {
    result.push(pocketmons.get(q));
  }

  console.log(result.join("\n"));

};

solution();
