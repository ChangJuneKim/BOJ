const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const people = input.slice(1, N + 1).map(v => v.split(' ').map(v => +v));

//키 몸무게 둘다 크면 덩치가 크다
//키나 몸무게 둘 중 하나만 크다면 덩치가 크다고 볼 수 없다
//덩치 등수 = 자신보다 더 큰 덩치의 사람 수 + 1
const solution = (N, people) => {
  let weight, height;
  const bulks = [];

  for (let i = 0; i < N; i++) {
    let rankOfBulk = 1;
    for (let j = 0; j < N; j++) {
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        rankOfBulk++;
      }
    }
    bulks.push(rankOfBulk);
  }
  console.log(bulks.join(' '));
};

solution(N, people);