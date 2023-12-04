const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

function parseTime(timeString) {
  const [h, m] = timeString.split(":").map(Number);
  return h * 60 + m;
}

const solution = () => {
  const [start, end, endStream] = input[0].split(" ").map(parseTime);

  const logs = input.slice(1).map(v => v.split(" ")).map(v => {
    return [parseTime(v[0]), v[1]];
  });

  const attendanceMap = new Map();

  // 입장 확인
  logs.forEach(([time, name]) => {
    if (time <= start) {
      attendanceMap.set(name, 1); // 입장 확인
    }
  });

  // 퇴장 확인 및 출석 확인
  logs.forEach(([time, name]) => {
    if (time >= end && time <= endStream && attendanceMap.has(name)) {
      attendanceMap.set(name, 2); // 퇴장 확인 및 출석 완료
    }
  });

  // 출석한 학회원 수 계산
  let count = 0;
  attendanceMap.forEach(value => {
    if (value === 2) {
      count++;
    }
  });
  
  console.log(count);
};

solution();
