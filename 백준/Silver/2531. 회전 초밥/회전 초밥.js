const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

// solution 함수는 주어진 문제를 해결하는 주 함수이다.
const solution = () => {
  // 첫 번째 줄에서 N, d, k, c 값을 구조 분해 할당을 통해 추출한다.
  const [N, d, k, c] = input[0].split(' ').map(Number);
  // 초밥 번호들을 저장하는 배열 sushiTypes을 선언하고, 입력값을 바탕으로 초기화한다.
  const sushiTypes = input.slice(1, N + 1).map(Number);

  // 초밥 종류별로 카운트하기 위한 Map 객체 sushiCount를 선언한다.
  let sushiCount = new Map();
  // 초기 윈도우에 쿠폰 번호에 해당하는 초밥을 추가한다.
  sushiCount.set(c, 1);

  // 초기 윈도우 설정: 처음 k개의 초밥을 윈도우에 추가한다.
  for (let i = 0; i < k; i++) {
    sushiCount.set(sushiTypes[i], (sushiCount.get(sushiTypes[i]) || 0) + 1);
  }

  // 가능한 초밥 종류의 최댓값을 저장하는 변수 maxTypes를 선언하고, 초기값을 설정한다.
  let maxTypes = sushiCount.size;

  // 슬라이딩 윈도우를 이용해 모든 윈도우를 순회한다.
  for (let i = 1; i < N; i++) {
    // 윈도우에서 제일 앞에 있던 초밥을 제거한다.
    let prevType = sushiTypes[i - 1];
    if (sushiCount.get(prevType) === 1) {
      sushiCount.delete(prevType);
    } else {
      sushiCount.set(prevType, sushiCount.get(prevType) - 1);
    }

    // 윈도우의 끝에 새로운 초밥을 추가한다. 벨트가 회전하기 때문에, (i + k - 1) % N 을 사용한다.
    let newType = sushiTypes[(i + k - 1) % N];
    sushiCount.set(newType, (sushiCount.get(newType) || 0) + 1);

    // maxTypes를 현재 윈도우의 초밥 종류 수와 비교하여 최댓값을 갱신한다.
    maxTypes = Math.max(maxTypes, sushiCount.size);
  }

  // 최댓값을 출력한다.
  console.log(maxTypes);
};

solution();