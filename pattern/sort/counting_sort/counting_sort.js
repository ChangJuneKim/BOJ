const numbers = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

const countingSort = numArr => {
  const max = Math.max(...numArr); // 가장 큰 수를 구한다

  const count = new Array(max + 1).fill(0); // 가장 큰 수의 크기만한 배열을 생성하고 모든 숫자의 개수를 0으로 초기화

  const sortedArray = [];

  numArr.forEach(val => {
    // 숫자의 개수를 세어 저장한다.
    count[val]++;
  });

  for (let i = 0; i < max; i++) {
    // 누적합을 구한다.
    count[i + 1] += count[i];
  }

  numArr.forEach(val => {
    // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를 집어넣는다.
    sortedArray[count[val] - 1] = val;
    count[val]--;
  });

  return sortedArray;
};

console.log(countingSort(numbers));
