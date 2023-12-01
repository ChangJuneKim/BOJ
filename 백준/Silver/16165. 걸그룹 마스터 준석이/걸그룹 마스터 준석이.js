const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  let inputIndex = 1;
  const [N, M] = input[0].split(" ").map(Number);
  const groups = new Map();
  const membersMap = new Map();

  for (let i = 0; i < N; i++) {
    const group = input[inputIndex++];
    const memberCount = +input[inputIndex++];
    const members = [];

    for (let m = 0; m < memberCount; m++) {
      const member = input[inputIndex++]
      membersMap.set(member, group);
      members.push(member);
    }

    groups.set(group, members.sort());
  }

  for (let i = 0; i < M; i++) {
    const q = input[inputIndex++];
    const qType = input[inputIndex++];

    if(qType === '0'){
      // 멤버 이름 사전순으로 출력
      console.log(groups.get(q).join("\n"));
    } else {
      // 멤버가 속한 팀의 이름 출력
      console.log(membersMap.get(q));
    }
  }
};

solution();
