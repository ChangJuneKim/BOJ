const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


// 이동 방향: 상, 우, 하, 좌, 위, 아래
const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0,-1, 1]
const solution = () => {
  let inputIndex = 0;

  while (inputIndex < input.length) {
    const [L, R, C] = input[inputIndex++].split(" ").map(Number);
    if (L === 0 && R === 0 && C === 0) break; // 입력의 끝 확인

    const building = [];
    let start, end;

    for(let l = 0; l < L; l++) {
      const floor = [];
      for (let r = 0; r < R; r++) {
        const row = input[inputIndex++].split("");
        floor.push(row);
        if (row.indexOf('S') !== -1) start = [l, r, row.indexOf('S')];
        if (row.indexOf('E') !== -1) end = [l, r, row.indexOf('E')];
      }
      building.push(floor);
      if (inputIndex < input.length && input[inputIndex].trim() === '') inputIndex++; // 각 층 사이의 빈 줄 넘기기
    }
    const result = bfs(start, end);
    console.log(result !== -1 ? `Escaped in ${result} minute(s).` : "Trapped!");

    function bfs(start, end) {
      const visited = Array.from({ length: L }, () => Array.from({ length: R }, () => Array(C).fill(false)));
      const queue = [[...start, 0]]; // [l, r, c, time]
      visited[start[0]][start[1]][start[2]] = true;

      while (queue.length) {
        const [l, r, c, time] = queue.shift();

        if (l === end[0] && r === end[1] && c === end[2]) {
          return time;
        }

        for (let i = 0; i < 6; i++) {
          const nl = l + dz[i];
          const nr = r + dx[i];
          const nc = c + dy[i];

          if (isIn(nr, nc, nl) && !visited[nl][nr][nc] && building[nl][nr][nc] !== '#') {
            queue.push([nl, nr, nc, time + 1]);
            visited[nl][nr][nc] = true;
          }
        }
      }

      return -1; // 탈출 불가능
    }
    function isIn(nx, ny, nz) {
      return 0 <= nx && nx < R && 0 <= ny && ny < C && 0 <= nz && nz < L;
    }
  }
};


solution();