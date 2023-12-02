const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n")

const solution = () => {
  const N = +input[0];
  const coordinates = input[1].split(" ").map(Number);

  // 좌표와 인덱스를 매핑
  const sortedCoords = Array.from(new Set(coordinates)).sort((a, b) => a - b);
  const coordMap = new Map(sortedCoords.map((coord, index) => [coord, index]));

  // 원래 좌표에 대한 압축된 좌표 찾기
  const compressedCoords = coordinates.map(coord => coordMap.get(coord));

  console.log(compressedCoords.join(' '));
};

solution();
