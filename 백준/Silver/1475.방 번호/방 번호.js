const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map(v => +v);

const solution = input => {
  const roomNumber = input;
  const numbersArr = Array(10).fill(0);

  for (let i = 0; i < roomNumber.length; i++) {
    if (roomNumber[i] === 6) {
      //6 일때
      if (numbersArr[roomNumber[i]] > numbersArr[9]) {
        //6카운트가 9카운트보다 높으면(6을 사용했으면)
        numbersArr[9]++; //9 사용 카운트 +1
      } else {
        numbersArr[roomNumber[i]]++; // 아니면 6 카운트 +1
      }
    } else if (roomNumber[i] === 9) {
      //9 일때
      if (numbersArr[roomNumber[i]] > numbersArr[6]) {
        //9카운트가 6카운트보다 높으면(9를 사용했으면)
        numbersArr[6]++;
      } else {
        numbersArr[roomNumber[i]]++;
      }
    } else {
      numbersArr[roomNumber[i]]++; //나머지 0 1 2 3 4 5 7 8 카운트
    }
  }

  answer = Math.max(...numbersArr);

  console.log(answer);
};

solution(input);