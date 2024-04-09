const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

const solution = () => {
  let left = 0, right = 0, count = 0;
  const seen = new Map();

  while (right < N) {
    if (seen.get(numbers[right]) === undefined) {
      // 현재 수가 유니크하면, 가능한 경우의 수를 증가시킵니다.
      count += (right - left + 1);
      seen.set(numbers[right], right);
      right++;
    } else {
      // 현재 수가 유니크하지 않다면, 유니크하게 만들기 위해 왼쪽 포인터를 조정합니다.
      const prevIndex = seen.get(numbers[right]);
      while (left <= prevIndex) {
        seen.delete(numbers[left]);
        left++;
      }
    }
  }
  console.log(count);
};

solution();
