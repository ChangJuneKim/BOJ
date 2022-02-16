const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const coordinates = input.slice(1).map(v => v.split(' ').map(v => +v));

const solution = (N, coordinates) => {
  let answer = '';
  const sortedCoords = coordinates.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < N; i++) {
    answer += `${sortedCoords[i][0]} ${sortedCoords[i][1]}\n`;
  }
  console.log(answer.trim());
};

solution(N, coordinates);