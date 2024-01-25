const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input.slice(1).map(Number).sort((a, b) => a - b);

  let minDiff = Infinity;
  let left = 0;
  let right = 0;

  while (right < N) {
    const diff = numbers[right] - numbers[left];

    if (diff >= M) {
      minDiff = Math.min(minDiff, diff);
      left++; // 차이가 M 이상일 경우, 왼쪽 포인터를 증가
    } else {
      right++; // 차이가 M 미만일 경우, 오른쪽 포인터를 증가
    }
  }

  console.log(minDiff);
};

solution();
