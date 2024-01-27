const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  let inputIndex = 0;
  const T = +input[inputIndex++];
  const result = [];

  for(let i = 0; i < T; i++){
    const [tcNum, ...students] = input[inputIndex++].split(" ").map(Number);

    let count = 0;

    const line = [];

    students.forEach(student => {
      let position = line.findIndex(s => s > student); // 학생보다 키가 큰 학생의 위치 찾기

      if (position === -1) { // 키가 큰 학생이 없으면 맨 뒤에 서기
        line.push(student);
      } else { // 키가 큰 학생이 있으면 그 앞에 서기
        line.splice(position, 0, student);
        count += line.length - position - 1; // 뒤로 물러나는 학생 수 누적
      }
    })


    result.push(`${tcNum} ${count}`);
  }

  console.log(result.join("\n"));
};

solution();
