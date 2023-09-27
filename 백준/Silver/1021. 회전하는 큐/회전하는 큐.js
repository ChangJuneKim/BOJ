const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [n, m] = input[0].split(" ").map(Number);
  const targetArr = input[1].split(" ").map(Number);

  let queue = Array.from({length: n}, (_, i) => i + 1);
  let count = 0;

  targetArr.forEach((target) => {
    let index = queue.indexOf(target);
    let left = index; // 왼쪽으로 이동하는 연산 횟수
    let right = queue.length - index; // 오른쪽으로 이동하는 연산 횟수
    count += Math.min(left, right); // 둘 중 최소값을 연산 횟수에 더함

    // 큐 회전 및 원소 제거
    if (left < right) {
      queue = [...queue.slice(index + 1), ...queue.slice(0, index)];
    } else {
      queue = [...queue.slice(index + 1), ...queue.slice(0, index)];
    }
  });

  console.log(count); // 수행한 연산 횟수 출력
};

solution();

