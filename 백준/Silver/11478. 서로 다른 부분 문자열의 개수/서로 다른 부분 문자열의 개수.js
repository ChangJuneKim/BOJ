const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const uniqueSubstrings = new Set();

  for (let i = 0; i < input[0].length; i++) {
    for (let j = i + 1; j <= input[0].length; j++) {
      uniqueSubstrings.add(input[0].substring(i, j));
    }
  }

  const answer = uniqueSubstrings.size;
  console.log(answer); // 서로 다른 부분 문자열의 개수 출력
};

solution();
