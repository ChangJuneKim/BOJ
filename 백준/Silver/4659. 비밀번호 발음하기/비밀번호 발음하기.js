const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split('\n');
const solution = () => {
  let inputIndex = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  while(input[inputIndex] !== 'end'){
    const password = input[inputIndex];
    let hasVowel = false; // 모음 포함 여부
    let isAcceptable = true; // 패스워드가 규칙을 만족하는지
    let vowelCount = 0; // 연속된 모음 수
    let consonantCount = 0; // 연속된 자음 수

    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      const nextChar = password[i + 1];
      // 모음 확인
      if (vowels.includes(char)) {
        hasVowel = true;
        vowelCount++;
        consonantCount = 0;
      } else {
        consonantCount++;
        vowelCount = 0;
      }
      // 모음이나 자음이 3개 연속으로 오는지 확인
      if (vowelCount === 3 || consonantCount === 3) {
        isAcceptable = false;
        break;
      }
      // 같은 글자가 연속적으로 두 번 오는지 확인 (ee, oo 허용)
      if (char === nextChar && char !== 'e' && char !== 'o') {
        isAcceptable = false;
        break;
      }
    }

    // 모음이 하나도 없는 경우
    if (!hasVowel) isAcceptable = false;

    // 결과 출력
    if (isAcceptable) {
      console.log(`<${password}> is acceptable.`);
    } else {
      console.log(`<${password}> is not acceptable.`);
    }

    inputIndex++;
  }
};

solution();
