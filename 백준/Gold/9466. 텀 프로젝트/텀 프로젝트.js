const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

let inputIndex = 1;
const solution = () => {

  const T = +input[0];

  for(let tc = 0; tc < T; tc++){
    const n = +input[inputIndex++];
    const choices = input[inputIndex++].split(" ").map(Number);

    const visited = Array(n + 1).fill(false);
    const inTeam = Array(n + 1).fill(false);

    let studentsNotInTeams = n;

    for (let student = 1; student <= n; student++) {
      if (!visited[student]) {
        const cycle = [];
        let current = student;

        while (!visited[current]) {
          visited[current] = true;
          cycle.push(current);
          current = choices[current - 1];
        }

        if (cycle.includes(current)) { // 사이클이 형성되었는지 확인
          const cycleIndex = cycle.indexOf(current);
          for (let i = cycleIndex; i < cycle.length; i++) {
            inTeam[cycle[i]] = true;
            studentsNotInTeams--; // 팀에 속한 학생 수 감소
          }
        }
      }
    }

    console.log(studentsNotInTeams); // 팀에 속하지 못한 학생들의 수 출력
  }
};


solution();