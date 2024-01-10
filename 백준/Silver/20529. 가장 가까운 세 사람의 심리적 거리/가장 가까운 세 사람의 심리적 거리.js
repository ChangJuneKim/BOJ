const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  let inputIndex = 0;
  const T = +input[inputIndex++];

  for (let i = 1; i <= T; i++) {
    const n = +input[inputIndex++];
    const mbtis = input[inputIndex++].split(" ");

    const dist = findMinimumDistance(mbtis);

    console.log(dist);
  }

  function mbtiToBinary(mbti) {
    const mapping = {'E': '0', 'I': '1', 'S': '0', 'N': '1', 'T': '0', 'F': '1', 'J': '0', 'P': '1'};
    return mbti.split('').map(char => mapping[char]).join('');
  }

  function binaryDistance(a, b) {
    let distance = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) distance++;
    }
    return distance;
  }

  function findMinimumDistance(mbtis) {
    if (mbtis.length > 32) return 0; // 최적화 2: n이 32를 초과하면 바로 0 반환

    // MBTI 유형별로 카운트
    const mbtiCounts = mbtis.reduce((counts, mbti) => {
      counts[mbti] = (counts[mbti] || 0) + 1;
      return counts;
    }, {});

    // 같은 유형은 최대 3개까지만 고려
    const uniqueMbtis = [];
    for (const mbti in mbtiCounts) {
      for (let i = 0; i < Math.min(mbtiCounts[mbti], 3); i++) {
        uniqueMbtis.push(mbti);
      }
    }

    // 이진 변환 및 최소 거리 계산
    const binaryMbtis = uniqueMbtis.map(mbtiToBinary);
    let minDistance = Infinity;
    for (let i = 0; i < binaryMbtis.length - 2; i++) {
      for (let j = i + 1; j < binaryMbtis.length - 1; j++) {
        for (let k = j + 1; k < binaryMbtis.length; k++) {
          const distance = binaryDistance(binaryMbtis[i], binaryMbtis[j]) +
            binaryDistance(binaryMbtis[j], binaryMbtis[k]) +
            binaryDistance(binaryMbtis[i], binaryMbtis[k]);
          minDistance = Math.min(minDistance, distance);
        }
      }
    }

    return minDistance === Infinity ? 0 : minDistance; // 모든 MBTI가 같은 경우를 처리
  }
};

solution();
