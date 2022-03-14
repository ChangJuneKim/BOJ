const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

const N = input[0];
const numbers = input.slice(1);

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
const solution = (N, numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const mean = Math.round(sortedNumbers.reduce((acc, cur) => (acc += cur), 0) / N);
  const median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
  const range = sortedNumbers[N - 1] - sortedNumbers[0];
  const map = new Map();

  let max = 1;

  for (let number of sortedNumbers) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  const maxArr = [];

  for (let [key, val] of map) {
    if (val === max) {
      maxArr.push(key);
    }
  }

  const mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];

  if (mean === -0) {
    console.log(0);
    console.log(median);
    console.log(mode);
    console.log(range);
  } else {
    console.log(mean);
    console.log(median);
    console.log(mode);
    console.log(range);
  }
};

solution(N, numbers);
