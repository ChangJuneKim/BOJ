const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 4 테스트 케이스

// RDD 내가 쓸 함수 리스트
// 4  배열 요소 수
// [1,2,3,4] 배열

// DD
// 1
// [42]

// RRD
// 6
// [1,1,2,3,5,8]

// D
// 0
// []

// R = 뒤집기 함수(reverse), D = 버리기 함수(첫번째요소 버리기 배열이 비었을 때 이용하면 에러발생)

// const input = ['4', 'RDD', '4', '[1,2,3,4]', 'DD', '1', '[42]', 'RRD', '6', '[1,1,2,3,5,8]', 'D', '0', '[]'];

const solution = input => {
  const N = +input.shift();

  for (let i = 1; i <= N; i++) {
    const sliced = input.splice(0, 3);

    const p = sliced[0].split(''); // 수행할 함수들
    const n = +sliced[1]; // 배열 요소의 수

    let array;

    if (n === 0) {
      array = [];
    } else {
      array = sliced[2].replaceAll(/\[|\]/g, '').split(',');
    }

    let isReversed = false;
    let isError = false;

    for (let i = 0; i < p.length; i++) {
      if (p[i] === 'R') {
        //R이면 리버스 토글
        isReversed = !isReversed;
      } else if (p[i] === 'D') {
        // D일때
        if (array.length === 0) {
          // array가 비어있으면 에러는 true
          isError = true;
          break;
        }
        if (isReversed) {
          // D일때 리버스가 true이면 뒤에거 제거
          array.pop();
        } else {
          // D일때 리버스가 false이면 앞에거 제거
          array.shift();
        }
      }
    }

    if (isError) {
      console.log('error');
    } else {
      if (!isReversed) {
        console.log(`[${array.join(',')}]`);
      } else {
        console.log(`[${array.reverse().join(',')}]`);
      }
    }
  }
};

solution(input);
