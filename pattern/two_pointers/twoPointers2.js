// 배열에 몇가지 다른 값이 들어있는지 카운트 하는 문제
// 정렬된 배열이어야한다
// pointer 두개가 우측으로 향하는 예제

const solution = arr => {
  let p1 = 0;
  let p2 = 0;
  if (arr.length === 0) return 0;

  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1 + 1;
};

// const solution = arr => {
//   const uniqueArr = [...new Set(arr)];
//   return uniqueArr.length;
// };

console.log(solution([1, 1, 1, 1, 1, 2])); // 2
console.log(solution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(solution([])); // 0
console.log(solution([1])); // 1
console.log(solution([-2, -1, -1, 0, 1])); // 4
