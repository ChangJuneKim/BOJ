const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  let currentIndex = 1;
  const T = +input[0];
  for (let i = 0; i < T; i++) {
    const N = parseInt(input[currentIndex++]); // 주자의 수
    const runners = input[currentIndex++].split(' ').map(Number); // 각 주자의 팀 번호

    const filteredRunners = filterTeamsByParticipants(N, runners);
    const scores = calculateScores(filteredRunners);
    const winner = findWinner(scores);

    console.log(winner);
  }
  function filterTeamsByParticipants(N, teams) {
    const teamCounts = {};
    teams.forEach(team => {
      if (!teamCounts[team]) teamCounts[team] = 0;
      teamCounts[team]++;
    });

    return teams.filter(team => teamCounts[team] >= 6);
  }

  function calculateScores(teams) {
    const scores = {};
    teams.forEach((team, index) => {
      if (!scores[team]) scores[team] = {totalScore: 0, ranks: []};
      scores[team].ranks.push(index + 1);
    });

    Object.keys(scores).forEach(team => {
      scores[team].totalScore = scores[team].ranks.sort((a, b) => a - b).slice(0, 4).reduce((a, b) => a + b, 0);
      scores[team].fifthRank = scores[team].ranks[4]; // 5번째 선수의 순위 저장
    });

    return scores;
  }

  function findWinner(scores) {
    let winner = null;
    let lowestScore = Infinity;
    let lowestFifthRank = Infinity;

    Object.keys(scores).forEach(team => {
      if (scores[team].totalScore < lowestScore || (scores[team].totalScore === lowestScore && scores[team].fifthRank < lowestFifthRank)) {
        winner = team;
        lowestScore = scores[team].totalScore;
        lowestFifthRank = scores[team].fifthRank;
      }
    });

    return winner;
  }
};

solution();