const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);

  const pocketmons = new Map(input.slice(1, 1 + N).map((pocketmon, index) => [pocketmon, index + 1]));
  const pocketmonsByNumber = new Map(input.slice(1, 1 + N).map((pocketmon, index) => [String(index + 1), pocketmon]));
  const questions = input.slice(1 + N, 1 + N + M);

  const result = [];

  for(const q of questions) {
    // 숫자인지 확인하고 해당하는 포켓몬 이름 또는 번호 찾기
    if (pocketmons.has(q)) {
      result.push(pocketmons.get(q));
    } else if (pocketmonsByNumber.has(q)) {
      result.push(pocketmonsByNumber.get(q));
    }
  }

  console.log(result.join("\n"));

};

solution();
